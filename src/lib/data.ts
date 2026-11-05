export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Python Developer & Backend Engineer",
  education: "B.Tech CSE @ Sandip University (GPA: 8.49)",
  location: "Varanasi, India -- 221010",
  email: "shivanshu.srivastava.work@gmail.com",
  phone: "+91 9198865041",
  tagline: "Focusing on REST APIs, Database Queries, and Automation Scripting.",
  bio: "Thank you for visiting my portfolio! I'm truly grateful for your time and interest in my work. Let's connect and build something meaningful together. ❤️",
  socials: {
    github: "https://github.com/brrrezy",
    linkedin: "https://www.linkedin.com/in/srivastavashivanshu/",
    twitter: "https://twitter.com/ez_brrrezy",
  }
};

export const projects = [
  {
    title: "TradeFlow",
    description: "Built a REST API with FastAPI and MongoDB for logging, filtering, and analyzing stock trades with per-user data isolation. Implemented JWT authentication with bcrypt password hashing; used MongoDB aggregation pipelines to compute portfolio metrics like win rate and net P&L.",
    tags: ["Python", "FastAPI", "MongoDB", "JWT Auth", "REST API"],
    link: "https://thetradeflow.vercel.app",
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
    title: "ThirdEye -- Org Memory System",
    description: "Built a document Q&A backend that chunks uploaded files, stores vector embeddings in ChromaDB, and retrieves relevant context for LLM-powered answers. Exposed REST endpoints via FastAPI for document upload, semantic search, and conversational queries over a knowledge base.",
    tags: ["Python", "FastAPI", "ChromaDB", "LangChain", "Vector Search"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/rag_memory_ui.png"
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
  },
  {
    title: "Clima-Cast",
    description: "Cleaned and preprocessed historical weather datasets using Pandas and NumPy. Trained regression models (MLPRegressor) with Scikit-Learn to forecast ambient temperature and humidity metrics.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    link: "https://github.com/brrrezy/Clima-Cast",
    image: "/climacast_ui.png"
  },
  {
    title: "Aeronexis AI",
    description: "Designed a responsive landing page and pre-registration waitlist system, storing user sign-up details securely in MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    link: "https://aeronexis.vercel.app",
    image: "/aeronexis_ui.png"
  },
  {
    title: "Shooters of India",
    description: "Designed and deployed a search-optimized web storefront for sports shooting accessories, integrated with Google Analytics.",
    tags: ["HTML/CSS", "JavaScript", "Analytics"],
    link: "https://shootersofindia.vercel.app/",
    image: "/shooters_ecommerce_ui.png"
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
    { name: "SQL", level: 85, slug: "mysql" },
    { name: "HTML/CSS", level: 80, slug: "html5" }
  ],
  backend: [
    { name: "FastAPI", level: 90, slug: "fastapi" },
    { name: "Flask", level: 82, slug: "flask" },
    { name: "REST APIs", level: 88, slug: "postman" },
    { name: "BeautifulSoup", level: 85, slug: "python" },
    { name: "Requests", level: 88, slug: "python" }
  ],
  databases: [
    { name: "MongoDB", level: 85, slug: "mongodb" },
    { name: "SQLite", level: 85, slug: "sqlite" },
    { name: "MySQL", level: 80, slug: "mysql" },
    { name: "SQLAlchemy ORM", level: 82, slug: "sqlalchemy" }
  ],
  tools: [
    { name: "Git & GitHub", level: 88, slug: "git" },
    { name: "GitHub Actions", level: 82, slug: "githubactions" },
    { name: "Postman", level: 85, slug: "postman" },
    { name: "Linux", level: 80, slug: "linux" },
    { name: "JWT Auth", level: 84, slug: "jsonwebtokens" },
    { name: "AsyncIO", level: 82, slug: "python" }
  ]
};

export const achievements = [
  {
    title: "Sunhacks 2026 (Top 10) - April 2026",
    organization: "Sandip University & ESDS",
    description: "Built the AI chatbot and knowledge-graph visualization features for an organizational memory tool (ThirdEye); placed in the Top 10."
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
    title: "Backend API Engineering",
    description: "Architecting clean, structured REST APIs using FastAPI, Flask, and Python with secure JWT authentication."
  },
  {
    id: "02",
    title: "Database Architecture",
    description: "Designing efficient schemas, indexing, and aggregation pipelines using MongoDB, SQLite, and MySQL."
  },
  {
    id: "03",
    title: "Data Pipelines & Web Scraping",
    description: "Writing robust scrapers, CLI utilities, and scheduled automation tasks using BeautifulSoup and GitHub Actions."
  },
  {
    id: "04",
    title: "Document Q&A & Semantic Search",
    description: "Building vector search retrieval pipelines and Q&A backends using ChromaDB and FastAPI."
  }
];
