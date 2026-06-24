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
    title: "TradeFlow",
    description: "Built an institutional-grade trading intelligence terminal. Engineered the FastAPI backend for real-time market data updates, automated trade ingestion, and risk-calculation pipelines.",
    tags: ["Python", "FastAPI", "MongoDB", "LangChain", "Next.js"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_mockup_1778786278461.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Developed a quantitative stock screening tool scanning 500+ NSE stocks. Built a custom parallel processing engine to fetch and analyze historical data, caching results in SQLite.",
    tags: ["Python", "FastAPI", "SQLite", "BeautifulSoup", "APScheduler"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/screener_mockup_1778786293976.png"
  },
  {
    title: "DietGPT",
    description: "Developed an AI fitness assistant utilizing Flask and LangChain. Implemented robust pipelines for meal parsing, calorie estimation, and conversational diet recommendations via LLM APIs.",
    tags: ["Python", "Flask", "LangChain", "Firebase", "Groq"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_mockup_1778786312853.png"
  },
  {
    title: "NSE Momentum Burst Scanner",
    description: "Created an automated stock scanner script executing daily on GitHub Actions. Scrapes Nifty 500 stock trends and delivers real-time breakout alerts to a Telegram channel.",
    tags: ["Python", "BeautifulSoup", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/breakout_monitor_mockup_1778786330940.png"
  },
  {
    title: "Autonomous Organizational Memory",
    description: "Built a knowledge base query system implementing a Retrieval-Augmented Generation (RAG) pipeline. Integrated ChromaDB vector store for semantic document chunking and vector search.",
    tags: ["Python", "ChromaDB", "RAG", "LangChain", "FastAPI"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/ragmemory_mockup_1778786346410.png"
  },
  {
    title: "Clima-Cast",
    description: "Trained an MLPRegressor neural network to predict ambient temperature and humidity using historical weather datasets. Built a data pipeline for clean preprocessing and visualization.",
    tags: ["Python", "scikit-learn", "Pandas", "Data Science"],
    link: "https://github.com/brrrezy/Clima-Cast",
    image: "/climacast_mockup_1778786421605.png"
  },
  {
    title: "Aeronexis AI",
    description: "Designed a responsive landing page and pre-registration waitlist system, storing user sign-up details in MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    link: "https://aeronexis.vercel.app",
    image: "/aeronexis_mockup_1778786407702.png"
  },
  {
    title: "Shooters of India",
    description: "Designed and deployed a search-optimized e-commerce website for sports shooting accessories, integrated with Google Analytics.",
    tags: ["HTML/CSS", "JavaScript", "Analytics"],
    link: "https://shootersofindia.vercel.app/",
    image: "/sales_intelligence_mockup_1778786384472.png"
  }
];

export const experience = [
  {
    title: "Machine Learning Intern",
    company: "Brain O Vision",
    date: "Jan 2024 - Mar 2024",
    location: "Hyderabad, India",
    description: [
      "Fine-tuned XGBoost and Random Forest models on consumer datasets to assist in improving predictive accuracy.",
      "Developed feature engineering pipelines and behavioral clustering models to preprocess customer data.",
      "Collaborated on a customer segmentation project using K-Means to identify distinct user cohorts for marketing analysis."
    ]
  },
  {
    title: "Python Programming Intern",
    company: "Code Alpha",
    date: "Nov 2025",
    location: "Lucknow, India",
    description: [
      "Wrote asynchronous Python scripts to automate routine tasks and optimize data processing workflows.",
      "Implemented unit tests to increase codebase reliability and identify bugs during active development cycles.",
      "Refactored older scripts into modular, object-oriented structures to improve code readability and maintenance."
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Sandip University, Nashik",
    date: "2022 - Present",
    location: "Nashik, Maharashtra",
    description: [
      "Focusing on Machine Learning, Data Science, and Full-Stack Development.",
      "Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Neural Networks.",
      "Exploring RAG pipelines and Vector Databases through personal projects and academic studies."
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
    { name: "Pytest & Unit Testing", level: 85, slug: "pytest" }
  ]
};

export const achievements = [
  {
    title: "AWS Certified Developer",
    organization: "Amazon Web Services (AWS)",
    description: "Professional certification for developing and maintaining AWS-based applications."
  },
  {
    title: "Certified Scrum Master",
    organization: "Scrum Alliance",
    description: "Formal training and certification in Agile methodologies and Scrum framework."
  },
  {
    title: "Sunhacks 2026 (Top 10) - April 2026",
    organization: "Sandip University & ESDS",
    description: "Developed a real-time compliance dashboard tracking regulatory updates from NSE, BSE, MCX, and RBI."
  },
  {
    title: "Sunhacks 2024 (Top 10) - April 2024",
    organization: "Sandip University & ESDS",
    description: "Designed a predictive model for HVAC energy optimization and smart climate control."
  },
  {
    title: "Sales Prediction & Product Performance Predictor Model",
    organization: "AICTE Data Science Hackathon (Winner) | Pune",
    description: "Secured 1st place in the national-level hackathon. Developed high-accuracy predictive regression models."
  }
];

export const services = [
  {
    id: "01",
    title: "Data Science",
    description: "Applying predictive modeling and data analysis to uncover insights from structured datasets."
  },
  {
    id: "02",
    title: "AI Agents",
    description: "Building customized RAG pipelines and assistant interfaces using LangChain and LLMs."
  },
  {
    id: "03",
    title: "Full-Stack Dev",
    description: "Developing responsive web applications using Next.js, TailwindCSS, and FastAPI."
  },
  {
    id: "04",
    title: "Machine Learning",
    description: "Training and deploying machine learning models for classification, regression, and forecasting."
  }
];
