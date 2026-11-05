export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Backend & Systems Engineer",
  education: "B.Tech CSE @ Sandip University (GPA: 8.49)",
  location: "Varanasi, India -- 221010",
  email: "shivanshu.srivastava.work@gmail.com",
  phone: "+91 9198865041",
  tagline: "Engineering high-throughput backend APIs, distributed automation pipelines, and RAG architectures.",
  bio: "Backend & systems engineer with hands-on experience building asynchronous microservices, distributed hardware automation, and FinTech data engines. Passionate about low-level system efficiency, clean API contracts, and vector-driven AI systems.",
  socials: {
    github: "https://github.com/brrrezy",
    linkedin: "https://www.linkedin.com/in/srivastavashivanshu/",
    twitter: "https://twitter.com/ez_brrrezy",
  }
};

export const projects = [
  {
    title: "TradeFlow",
    description: "Built an institutional-grade trading terminal REST API with FastAPI and async MongoDB for logging, filtering, and analyzing stock trades with per-user data isolation. Implemented JWT authentication with bcrypt password hashing; engineered MongoDB aggregation pipelines to compute portfolio metrics like win rate and net P&L.",
    tags: ["Python", "FastAPI", "MongoDB", "JWT Auth", "REST API", "Motor"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_ui.png"
  },
  {
    title: "ThirdEye -- Org Memory System",
    description: "Architected an organizational memory tool powered by RAG and vector search (ChromaDB) for document Q&A. Developed conversational chatbot interactions, interactive knowledge-graph node visualizations, structured directory management, and user management with FastAPI REST endpoints (SunHacks '26 Top 10).",
    tags: ["Python", "FastAPI", "RAG", "ChromaDB", "Knowledge Graphs", "LangChain"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/rag_memory_ui.png"
  },
  {
    title: "ShadowGram -- Distributed Publishing Node",
    description: "Architected a headless social publishing system using wireless ADB over a secure Tailscale WireGuard tunnel. Built a zero-device-storage staging queue hosted on Telegram Cloud with Docker runner deployment, bypassing Meta Graph API restrictions with automated cold-boot UI navigation and media scrubbing.",
    tags: ["Python", "Wireless ADB", "Tailscale", "Docker", "Telegram API", "Automation"],
    link: "https://github.com/brrrezy/ig-automation",
    image: "/tradeflow_ui.png"
  },
  {
    title: "Trade Vector -- Quant Scalp Engine",
    description: "Built a quantitative analysis pipeline for historical NIFTY 50 and SENSEX options trading signals. Modeled momentum velocity (Peak - Entry) / TimeDelta, opening range breakouts, and a 3-tier profit-taking algorithm with automated event-by-event time-series log exports.",
    tags: ["Python", "Pandas", "Quant Analysis", "Time-Series", "Algorithmic Trading"],
    link: "https://github.com/brrrezy/Trade-Vector",
    image: "/tradeflow_ui.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Developed a stock screening service that scrapes daily NSE data and flags potential swing setups based on technical indicators. Used SQLite to cache historical data locally and scheduled background scraping jobs with APScheduler to keep results current.",
    tags: ["Python", "FastAPI", "SQLite", "BeautifulSoup", "APScheduler"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/nse_screener_ui.png"
  },
  {
    title: "NSE Breakout Monitor",
    description: "Wrote a Python script that scrapes Nifty 500 data and identifies momentum breakouts based on price and volume thresholds. Automated daily runs via GitHub Actions cron and integrated Telegram Bot API for instant breakout notifications.",
    tags: ["Python", "BeautifulSoup", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/nse_burst_ui.png"
  },
  {
    title: "DietGPT Assistant",
    description: "Designed a backend AI fitness prototype integrating Flask and LangChain with remote LLM APIs. Handled meal data parsing, calorie calculation, and user chat history with Firebase.",
    tags: ["Python", "Flask", "LangChain", "Firebase"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_ui.png"
  }
];

export const experience = [
  {
    title: "Python Programming Intern",
    company: "Code Alpha",
    date: "Nov 2025",
    location: "Lucknow, India",
    description: [
      "Built modular Python scripts for data processing and file management using standard libraries (os, json, csv, datetime).",
      "Developed CLI utilities with structured error handling and integrated REST API data fetching using the Requests library."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Brain O Vision",
    date: "Jan 2024 - Mar 2024",
    location: "Hyderabad, India",
    description: [
      "Preprocessed structured datasets using Pandas and NumPy -- handled missing values, encoded categorical features, and applied feature scaling.",
      "Trained and evaluated classification models (Decision Tree, Random Forest) with Scikit-Learn; measured performance using accuracy, precision, and confusion matrices."
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Sandip University",
    date: "2022 - 2026",
    location: "Nashik, Maharashtra",
    description: [
      "Graduating with an 8.49 GPA in Computer Science & Engineering.",
      "Hands-on focus: REST API Design, Database Queries, Automation Scripts, and Backend Systems.",
      "Active participant in collegiate and national level hackathons."
    ]
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 92, slug: "python" },
    { name: "TypeScript", level: 82, slug: "typescript" },
    { name: "SQL", level: 85, slug: "mysql" },
    { name: "HTML/CSS", level: 80, slug: "html5" }
  ],
  backend: [
    { name: "FastAPI", level: 92, slug: "fastapi" },
    { name: "AsyncIO & Motor", level: 88, slug: "python" },
    { name: "REST API Design", level: 90, slug: "postman" },
    { name: "ChromaDB & RAG", level: 86, slug: "python" },
    { name: "LangChain", level: 84, slug: "langchain" },
    { name: "BeautifulSoup", level: 85, slug: "python" }
  ],
  databases: [
    { name: "MongoDB", level: 88, slug: "mongodb" },
    { name: "SQLite", level: 85, slug: "sqlite" },
    { name: "MySQL", level: 80, slug: "mysql" },
    { name: "SQLAlchemy ORM", level: 82, slug: "sqlalchemy" }
  ],
  tools: [
    { name: "Docker", level: 85, slug: "docker" },
    { name: "Tailscale / VPN", level: 84, slug: "tailscale" },
    { name: "Wireless ADB", level: 88, slug: "android" },
    { name: "Git & GitHub", level: 88, slug: "git" },
    { name: "GitHub Actions", level: 85, slug: "githubactions" },
    { name: "Linux", level: 82, slug: "linux" },
    { name: "JWT Auth", level: 86, slug: "jsonwebtokens" }
  ]
};

export const achievements = [
  {
    title: "Sunhacks 2026 (Top 10) - April 2026",
    organization: "Sandip University & ESDS",
    description: "Built the AI chatbot and interactive knowledge-graph node visualizations for ThirdEye, an organizational memory tool powered by RAG models. Implemented conversational chatbot interactions, directory management, and user management; placed in the Top 10."
  },
  {
    title: "Sunhacks 2024 (Top 10) - April 2024",
    organization: "Sandip University & ESDS",
    description: "Contributed to a predictive ML pipeline for energy-efficient HVAC climate control; team placed in the Top 10."
  },
  {
    title: "AICTE Data Science Hackathon (Winner)",
    organization: "National Level Hackathon | Pune",
    description: "Won 1st place by building regression models for sales forecasting and product performance prediction using Scikit-Learn and Pandas."
  }
];

export const services = [
  {
    id: "01",
    title: "High-Throughput Backend APIs",
    description: "Architecting high-performance asynchronous REST APIs using FastAPI, Python, and async Motor/MongoDB with JWT authentication and structured data isolation."
  },
  {
    id: "02",
    title: "Applied AI & RAG Architectures",
    description: "Building organizational memory tools, ChromaDB vector search retrieval pipelines, LangChain integrations, and interactive knowledge-graph node visualizations."
  },
  {
    id: "03",
    title: "Distributed Hardware & Cloud Automation",
    description: "Deploying autonomous publishing nodes using Wireless ADB over secure Tailscale WireGuard tunnels, Telegram Cloud staging, and Docker runners."
  },
  {
    id: "04",
    title: "Financial Data & Automation Pipelines",
    description: "Engineering resilient market scrapers, SQLite caching layers, quantitative time-series models, and automated 24/7 background cron notification bots."
  }
];
