export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Python Developer & Backend Engineer",
  education: "Computer Science Student @ Sandip University",
  location: "Varanasi, India - 221010",
  email: "shivanshu.srivastava.work@gmail.com",
  phone: "+91 9198865041",
  tagline: "Focusing on REST APIs, Automated Scripting, and Intelligent RAG Pipelines.",
  bio: "Thank you for visiting my portfolio! I'm truly grateful for your time and interest in my work. Let's connect and build something meaningful together. ❤️",
  socials: {
    github: "https://github.com/brrrezy",
    linkedin: "https://www.linkedin.com/in/srivastavashivanshu/",
    twitter: "https://twitter.com/ez_brrrezy",
  }
};

export const projects = [
  {
    title: "TradeFlow Terminal",
    description: "Engineered a high-performance trading API with FastAPI, implementing WebSockets for sub-100ms real-time market data streaming and strict MongoDB user isolation. Integrated a LangChain AI coaching module for automated position sizing and risk analysis.",
    tags: ["Python", "FastAPI", "MongoDB", "LangChain", "WebSockets"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_ui.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Architected a custom parallel processing engine scanning 500+ NSE stocks for quantitative signals. Reduced analysis latency via asynchronous task scheduling (APScheduler) and optimized SQLite caching layers, serving data through a lightweight API.",
    tags: ["Python", "FastAPI", "SQLite", "BeautifulSoup", "AsyncIO"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/nse_screener_ui.png"
  },
  {
    title: "Autonomous Org Memory",
    description: "Engineered a scalable Retrieval-Augmented Generation (RAG) backend utilizing FastAPI and ChromaDB. Solved unstructured data retrieval bottlenecks by implementing semantic document chunking and vector search for context-aware LLM query responses.",
    tags: ["Python", "ChromaDB", "RAG", "LangChain", "FastAPI"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/rag_memory_ui.png"
  },
  {
    title: "DietGPT Assistant",
    description: "Designed a backend AI fitness ecosystem integrating Flask and LangChain with LLM APIs (Groq). Built robust data pipelines for natural language meal parsing, dynamic calorie estimation, and conversational state persistence via Firebase.",
    tags: ["Python", "Flask", "LangChain", "Firebase", "Groq API"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_ui.png"
  },
  {
    title: "NSE Momentum Scanner",
    description: "Automated daily market scanning by building a resilient GitHub Actions pipeline that scrapes and processes Nifty 500 trends. Engineered real-time breakout alerting algorithms with instant push notifications via Telegram API.",
    tags: ["Python", "BeautifulSoup", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/nse_burst_ui.png"
  },
  {
    title: "Clima-Cast",
    description: "Engineered robust data pipelines for clean preprocessing and visualization of historical weather datasets. Trained and deployed an MLPRegressor neural network to accurately forecast ambient temperature and humidity metrics.",
    tags: ["Python", "scikit-learn", "Pandas", "Data Science"],
    link: "https://github.com/brrrezy/Clima-Cast",
    image: "/climacast_ui.png"
  },
  {
    title: "Aeronexis AI",
    description: "Designed a responsive landing page and pre-registration waitlist system, storing user sign-up details in MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    link: "https://aeronexis.vercel.app",
    image: "/aeronexis_ui.png"
  },
  {
    title: "Shooters of India",
    description: "Designed and deployed a search-optimized e-commerce website for sports shooting accessories, integrated with Google Analytics.",
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
      "Engineered asynchronous Python workflows to automate data ingestion and processing, reducing routine task execution time by over 40%.",
      "Strengthened system reliability by implementing comprehensive Pytest suites, increasing test coverage and accelerating deployment cycles.",
      "Refactored legacy monolith scripts into modular, object-oriented micro-components, significantly improving maintainability and extensibility."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Brain O Vision",
    date: "Jan 2024 - Mar 2024",
    location: "Hyderabad, India",
    description: [
      "Developed scalable feature engineering pipelines and behavioral clustering models (K-Means) to preprocess and segment large consumer datasets.",
      "Fine-tuned XGBoost and Random Forest algorithms, achieving measurable improvements in predictive accuracy for customer cohort analysis.",
      "Collaborated with cross-functional teams to integrate predictive models into analytical dashboards for marketing optimization."
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Sandip University, Nashik",
    date: "2022 - 2026",
    location: "Nashik, Maharashtra",
    description: [
      "Graduated with an 8.49 GPA.",
      "Focusing on Distributed Systems, Machine Learning, Data Structures, and API Architecture.",
      "Actively exploring RAG pipelines and Vector Databases to build production-ready LLM backends."
    ]
  }
];

export const skills = {
  programming: [
    { name: "Python", level: 95, slug: "python" },
    { name: "SQL", level: 88, slug: "postgresql" },
    { name: "HTML/CSS", level: 80, slug: "html5" },
    { name: "Bash", level: 75, slug: "gnubash" }
  ],
  frameworks: [
    { name: "FastAPI", level: 92, slug: "fastapi" },
    { name: "Flask", level: 85, slug: "flask" },
    { name: "Django", level: 75, slug: "django" },
    { name: "LangChain", level: 82, slug: "langchain" }
  ],
  libraries: [
    { name: "Pandas & NumPy", level: 88, slug: "pandas" },
    { name: "BeautifulSoup", level: 90, slug: "python" },
    { name: "SQLAlchemy ORM", level: 85, slug: "sqlalchemy" },
    { name: "Requests", level: 92, slug: "postman" },
    { name: "Scikit-learn", level: 75, slug: "scikitlearn" }
  ],
  tools: [
    { name: "Docker", level: 80, slug: "docker" },
    { name: "Git & GitHub", level: 90, slug: "git" },
    { name: "PostgreSQL & SQLite", level: 88, slug: "postgresql" },
    { name: "MongoDB", level: 85, slug: "mongodb" },
    { name: "Linux/Ubuntu", level: 80, slug: "linux" },
    { name: "Pytest", level: 85, slug: "pytest" }
  ]
};

export const achievements = [
  {
    title: "AWS Certified Developer",
    organization: "Amazon Web Services (AWS)",
    description: "Professional certification for developing, deploying, and debugging cloud-based applications."
  },
  {
    title: "Certified Scrum Master",
    organization: "Scrum Alliance",
    description: "Formal training and certification in Agile methodologies and software delivery cycles."
  },
  {
    title: "Sunhacks 2026 (Top 10) - April 2026",
    organization: "Sandip University & ESDS",
    description: "Engineered a real-time compliance dashboard tracking regulatory updates via webhooks from NSE, BSE, MCX, and RBI."
  },
  {
    title: "Sunhacks 2024 (Top 10) - April 2024",
    organization: "Sandip University & ESDS",
    description: "Designed a predictive machine learning pipeline for HVAC energy optimization and smart climate control."
  },
  {
    title: "AICTE Data Science Hackathon (Winner)",
    organization: "National Level Hackathon | Pune",
    description: "Secured 1st place by engineering high-accuracy predictive regression models for sales intelligence and product forecasting."
  }
];

export const services = [
  {
    id: "01",
    title: "Backend API Engineering",
    description: "Architecting high-performance, scalable REST/WebSocket APIs using FastAPI and Python."
  },
  {
    id: "02",
    title: "AI & RAG Systems",
    description: "Building autonomous agents and context-aware LLM pipelines with LangChain and Vector Databases."
  },
  {
    id: "03",
    title: "Data Pipelines & Automation",
    description: "Designing robust web scrapers, ETL pipelines, and async task processors to automate workflows."
  },
  {
    id: "04",
    title: "Database Architecture",
    description: "Optimizing relational (PostgreSQL) and NoSQL (MongoDB) models for efficient data retrieval."
  }
];
