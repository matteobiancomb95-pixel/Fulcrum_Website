// English content for the standalone pages

export const AGENT_CATEGORIES_EN = [
  {
    name: "Customer Operations",
    cases: [
      { title: "Customer Care Bot (voice + chat)", desc: "Conversational assistant handling recurring requests: policy/account checks, order status, patient triage and FAQ, product support.", core: ["Financial Services", "Retail", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Claims & ticketing management", desc: "Automatic intake, classification and routing of claims or support tickets, with document collection and first customer response.", core: ["Financial Services"] },
    ],
  },
  {
    name: "Sales & Revenue",
    cases: [
      { title: "Sales Automation (lead gen + qualification)", desc: "Agent that finds new opportunities, sends omnichannel outreach, qualifies leads and pushes them into the pipeline.", core: ["Consumer Goods", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Pricing Automation", desc: "Agent that adjusts prices based on market, demand and stock. Priority in retail; dynamic/packaging pricing in SaaS.", core: ["Retail", "SaaS B2B"] },
    ],
  },
  {
    name: "Marketing & Content",
    cases: [
      { title: "Content generation + marketing targeting", desc: "Content production and automatic campaign target definition from CRM/CDP data.", core: ["Financial Services", "Retail", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Omnichannel graphics", desc: "Automatic creation of channel-specific graphics (email, social, onsite, ADV) from brand templates.", core: ["Retail", "SaaS B2B"] },
      { title: "Omnichannel audience extraction", desc: "Automatic segmentation and audience building across all channels from business rules.", core: ["Financial Services", "Retail", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Website content updates", desc: "Automatic updating of pages, product sheets and site content.", core: ["Retail", "SaaS B2B"] },
      { title: "Social content updates", desc: "Automatic scheduling and publishing of social content.", core: ["Retail", "SaaS B2B"] },
    ],
  },
  {
    name: "Finance & Document",
    cases: [
      { title: "Accounts payable (supplier invoices)", desc: "Automatic recording and reconciliation of supplier invoices in the ERP. High-frequency task, high ROI.", core: ["Retail", "Consumer Goods", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Accounts receivable", desc: "Automatic issuing, recording and reconciliation of outgoing invoices.", core: ["Consumer Goods", "B2B", "Healthcare & Pharma", "SaaS B2B"] },
      { title: "Document automation (policies, contracts, regulation)", desc: "Extraction, classification and generation of documents: policies and contracts, regulatory documentation and scientific literature, SaaS contracts.", core: ["Financial Services", "B2B", "SaaS B2B"] },
    ],
  },
  {
    name: "Supply & Operations",
    cases: [
      { title: "Buyer automation (assortment on ERP)", desc: "Automatic insertion and updating of the assortment in the ERP.", core: ["Retail", "Consumer Goods"] },
      { title: "Reordering (stock-based)", desc: "Agent that reorders quantities based on ERP stock and demand forecasts.", core: ["Retail", "Consumer Goods"] },
      { title: "Production automation", desc: "Scheduling, document quality control and batch traceability. To be validated during assessment on MES/production systems.", core: [] },
    ],
  },
  {
    name: "Data & Reporting",
    cases: [
      { title: "Automatic reporting (BI)", desc: "Automatic report generation from analytics tools (Power BI, Tableau, SAP BO) with adaptive analysis — today done manually in Excel.", core: ["All sectors"] },
    ],
  },
  {
    name: "HR & People",
    cases: [
      { title: "Talent Acquisition (screening + scheduling)", desc: "Automatic CV screening, candidate outreach and interview scheduling.", core: [] },
    ],
  },
  {
    name: "Governance & Compliance",
    cases: [
      { title: "AI Governance & Compliance", desc: "Regulatory compliance and traceability: Banca d'Italia/IVASS and the AI Act, regulatory documentation, cross-cutting AI Act. Every production agent needs this layer.", core: ["Financial Services", "B2B", "SaaS B2B"] },
    ],
  },
];

export const PAGES_EN = {
  aiAdoption: {
    eyebrow: "People",
    title: "AI Adoption",
    lead: "Structured corporate training to embed artificial intelligence into the everyday skills of the whole organisation — from leadership to the front line.",
    stats: [
      { value: "100%", label: "of levels involved, from board to operations" },
      { value: "4-8 wks", label: "to the first measurable adoption cycle" },
      { value: "AI Policy", label: "drafted and adopted internally" },
    ],
    programsTitle: "The programmes",
    programs: [
      { title: "AI Leadership", desc: "Executive tracks for board and management: where AI creates value, how to govern risk and investment, how to lead the change." },
      { title: "AI Upskilling for every level", desc: "Hands-on labs tailored by function: prompts, tools and real workflows applied to each team's tasks." },
      { title: "AI Policy drafting", desc: "Clear, safe and compliant usage rules: what is allowed, with which data, under which controls." },
      { title: "AI Champion programme", desc: "Selecting and training internal referents who spread adoption and keep the transformation alive over time." },
    ],
    methodTitle: "How we work",
    method: [
      { n: "01", title: "Assessment", desc: "We measure maturity, skills and high-impact use cases." },
      { n: "02", title: "Design", desc: "We build the training path tailored to functions and levels." },
      { n: "03", title: "Delivery", desc: "Hands-on training with real-context examples and tools." },
      { n: "04", title: "Adoption", desc: "We guide teams to daily use, with KPIs and follow-up." },
    ],
    ctaTitle: "Bring AI into your team's skillset.",
    ctaText: "Contact us for an AI Adoption Assessment.",
  },

  aiAgents: {
    eyebrow: "Processes",
    title: "AI Agents",
    lead: "AI agents specialised on the highest-impact areas, with deep expertise in the Italian context. Every agent is integrated into your tools and covered by a governance layer.",
    legendTitle: "Priority by sector",
    legend: [
      { mark: "core", label: "core — high impact, first to activate" },
      { mark: "all", label: "horizontal — valid across almost every sector" },
    ],
    categoriesTitle: "Use cases by category",
    coreLabel: "Core sectors",
    categories: AGENT_CATEGORIES_EN,
    ctaTitle: "Which process do you want to automate first?",
    ctaText: "Contact us for the use-case matrix for your sector.",
  },

  serviziDigitali: {
    eyebrow: "End-to-end",
    title: "Digital Services",
    lead: "We manage the entire lifecycle of digital services implementation and integration: from analysis to production release and maintenance. A single partner, from strategy to code.",
    services: [
      { title: "Custom software (CRM, ERP, etc.)", desc: "Design and development of bespoke systems — CRM, ERP and internal tools — integrated with your processes and AI agents.", points: ["Process & requirements analysis", "Integration with existing systems", "Native AI automation", "Training & support"] },
      { title: "Web App", desc: "Fast, scalable web applications: portals, dashboards, member areas and bespoke platforms.", points: ["Bespoke UX/UI", "Scalable architecture", "Security & compliance", "Ongoing maintenance"] },
      { title: "Mobile App", desc: "Native and cross-platform apps for iOS and Android, built for real use and integrated with your data.", points: ["iOS & Android", "Use-driven design", "Back-end integration", "Publishing & updates"] },
    ],
    processTitle: "End-to-end delivery",
    process: [
      { n: "01", title: "Discovery", desc: "Analysis of processes, requirements and business goals." },
      { n: "02", title: "Design", desc: "Architecture, UX and integration plan." },
      { n: "03", title: "Build", desc: "Iterative development with AI automation where it matters." },
      { n: "04", title: "Integration", desc: "Connection to existing systems, data and tools." },
      { n: "05", title: "Run", desc: "Release, monitoring and evolutionary maintenance." },
    ],
    ctaTitle: "Have a digital service to build or integrate?",
    ctaText: "Contact us for a scoping call.",
  },

  settori: {
    eyebrow: "Sectors",
    title: "AI tailored to your sector",
    lead: "We bring AI Adoption and AI Agents to Italian organisations in every sector. Each programme is calibrated to the industry's specifics, the functions involved and the level of digital maturity.",
    stats: [
      { value: "8", label: "sectors covered" },
      { value: "17+", label: "agent use cases mapped" },
      { value: "IT", label: "expertise in the Italian context" },
    ],
    adoptionLabel: "AI Adoption",
    agentsLabel: "AI Agents",
    list: [
      { name: "Financial Services", desc: "Compliance, risk management, operations and customer service: AI transforms finance and insurance on every front.", adoption: "Training for compliance, risk, customer service and operations. Dedicated board-level sessions.", agents: "Document automation for policies and contracts, claims management, AI Governance for Banca d'Italia, IVASS and the AI Act." },
      { name: "Healthcare & Pharma", desc: "Strict regulatory constraints and sensitive data: our approach puts compliance and privacy first.", adoption: "Training for medical and administrative staff, R&D and regulatory affairs on compliant AI use.", agents: "Document automation for clinical data and literature, patient triage and FAQ bots, regulatory governance." },
      { name: "Consumer Goods & Retail", desc: "Experience personalisation, supply chain, marketing and sales: retail is among the highest-ROI sectors.", adoption: "Training for marketing, sales, category management and operations on personalisation and content generation.", agents: "Pricing automation, buyer automation and ERP reordering, multichannel customer care, accounts payable." },
      { name: "Automotive & Mobility", desc: "A double transformation — electrification and digitalisation — reshaping sales, customer journey and dealer networks.", adoption: "Training for sales networks, customer success and operations; change management across networks.", agents: "Sales automation and lead qualification, document automation for leasing and financing, after-sales support." },
      { name: "Manufacturing", desc: "High document and operational volumes: AI acts on efficiency, quality and traceability.", adoption: "Training for operations, quality and administrative functions on everyday AI use.", agents: "Accounts payable and invoicing, automatic reporting, production automation to validate in assessment." },
      { name: "Utilities & Energy", desc: "Large volumes of customer data and regulatory documentation: operational efficiency, customer experience and compliance.", adoption: "Training for operations, customer service, regulatory and field teams on the energy sector's digital shift.", agents: "Customer care for bills and complaints, operational reporting, governance for sector regulation (ARERA)." },
      { name: "Professional Services", desc: "Firms and service companies: AI accelerates analysis, document production and client relations.", adoption: "Training for professionals and staff on prompts, tools and workflows applied to real engagements.", agents: "Document automation, automatic reporting, sales automation and client request handling." },
      { name: "Public Administration", desc: "In full digital transformation: AI improves service efficiency, response times and process simplification.", adoption: "Training for managers and officials on the AI Act, GDPR and responsible AI use in the public sector.", agents: "Document classification and drafting of acts, citizen support (FAQ, case status), regulatory governance." },
    ],
    ctaTitle: "Which sector does your organisation operate in?",
    ctaText: "Contact us for a tailored path.",
  },

  chiSiamo: {
    eyebrow: "About us",
    title: "Fulcrum accelerates AI adoption across companies",
    lead: "An Italian AI transformation company. We work on people and processes to bring AI where it creates real value — with the pragmatism of those who know the Italian context.",
    stats: [
      { value: "People", label: "AI Adoption programmes across all levels" },
      { value: "Processes", label: "AI Agents on high-impact areas" },
      { value: "E2E", label: "from strategy to software in production" },
    ],
    missionTitle: "Our mission",
    missionText: "We accelerate AI adoption across companies. Artificial intelligence isn't the future, it's the present. We are the fulcrum that turns a complex technology into your company's most powerful lever, by training people and automating processes.",
    visionTitle: "Our vision",
    visionText: "We believe managing a company should be effortless, powered by AI adoption. We are the fulcrum of that transformation: minimal effort, enormous lift.",
    approachTitle: "Our approach",
    approach: [
      { title: "Verifiable impact", desc: "Every project has defined KPIs. At the end, the report shows what changed: skills, hours saved, costs reduced, processes automated." },
      { title: "Execution", desc: "We design and we build. The same team that makes the proposal develops the agent and trains the people." },
      { title: "Vertical expertise", desc: "We know the models, platforms, limits and evolution of the technology because we use it every day." },
      { title: "Honesty", desc: "If an AI project doesn't make sense, we say so. If a legacy system can't be integrated, we say so. The goal is real impact." },
    ],
    techTitle: "Technologies & partners",
    techText: "We are model-agnostic and vendor-agnostic. We work with the main AI models and platforms: OpenAI, Anthropic, Google, Meta, Mistral, plus Microsoft Copilot, n8n and Azure, AWS and Google Cloud.",
    ctaTitle: "Let's build your AI transformation together.",
    ctaText: "Contact us.",
  },
};
