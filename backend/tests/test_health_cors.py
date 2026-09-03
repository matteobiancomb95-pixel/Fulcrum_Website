"""Regression tests for the newly added root /health probe route and CORS_ORIGINS update."""
import os

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
backend_env = dotenv_values("/app/backend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL missing")
BASE_URL = base_url.rstrip("/")
LOCAL_URL = "http://127.0.0.1:8001"


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    return s


# ---------- Root /health (Kubernetes readiness probe target) ----------
class TestHealthProbe:
    def test_health_on_internal_backend_port(self, api):
        """The probe hits http://127.0.0.1:8001/health — must be 200 + JSON."""
        r = api.get(f"{LOCAL_URL}/health", timeout=10)
        assert r.status_code == 200, r.text[:300]
        assert "application/json" in r.headers.get("content-type", "")
        assert r.json() == {"status": "ok"}

    def test_health_head_and_get_only(self, api):
        """POST to /health should be 405 (route exists, method not allowed)."""
        r = api.post(f"{LOCAL_URL}/health", timeout=10)
        assert r.status_code == 405

    def test_health_repeat_stability(self, api):
        for _ in range(5):
            r = api.get(f"{LOCAL_URL}/health", timeout=10)
            assert r.status_code == 200 and r.json()["status"] == "ok"


# ---------- CORS ----------
ALLOWED_ORIGINS = [o.strip() for o in backend_env["CORS_ORIGINS"].split(",") if o.strip()]


class TestCors:
    @pytest.mark.parametrize("origin", ALLOWED_ORIGINS)
    def test_simple_request_echoes_origin(self, api, origin):
        # Checked against the app directly: the preview ingress rewrites
        # Access-Control-Allow-Origin to "*" at the edge (platform behaviour).
        r = api.get(f"{LOCAL_URL}/api/", headers={"Origin": origin}, timeout=15)
        assert r.status_code == 200, r.text[:200]
        assert r.headers.get("access-control-allow-origin") == origin, dict(r.headers)
        assert r.headers.get("access-control-allow-credentials") == "true"

    @pytest.mark.parametrize("origin", ["https://fulcrum.lt", "https://www.fulcrum.lt"])
    def test_preflight_contact_from_custom_domain(self, api, origin):
        r = api.options(
            f"{LOCAL_URL}/api/contact",
            headers={
                "Origin": origin,
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "content-type",
            },
            timeout=15,
        )
        assert r.status_code in (200, 204), r.text[:200]
        assert r.headers.get("access-control-allow-origin") == origin
        assert "POST" in r.headers.get("access-control-allow-methods", "*") or \
            r.headers.get("access-control-allow-methods") == "*"

    def test_disallowed_origin_not_echoed(self, api):
        r = api.get(f"{LOCAL_URL}/api/", headers={"Origin": "https://evil.example.com"}, timeout=15)
        assert r.status_code == 200
        assert r.headers.get("access-control-allow-origin") != "https://evil.example.com"

    def test_cors_env_contains_custom_domain(self):
        assert "https://fulcrum.lt" in ALLOWED_ORIGINS
        assert "https://www.fulcrum.lt" in ALLOWED_ORIGINS
        assert BASE_URL in ALLOWED_ORIGINS
