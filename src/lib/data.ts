export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Data Enthusiast & Full-Stack Developer",
  education: "Computer Science Student @ Sandip University",
  location: "Varanasi, India - 221010",
  email: "shivanshu.srivastava.work@gmail.com",
  phone: "+91 9198865041",
  tagline: "Focusing on RAG Pipelines, AI Agents, and Predictive Analytics.",
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
    description: "Built an interactive trade journaling dashboard featuring real-time market data updates and automated trade analysis.",
    tags: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "TailwindCSS"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_mockup_1778786278461.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Developed a quantitative stock screening tool that scans 500+ NSE stocks to detect technical patterns and swing trading setups.",
    tags: ["Python", "FastAPI", "SQLite", "Railway"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/screener_mockup_1778786293976.png"
  },
  {
    title: "DietGPT",
    description: "Developed a fitness assistant leveraging LangChain and Groq LLMs to provide personalized meal plans and automated calorie estimations via a chatbot interface.",
    tags: ["Flask", "Firebase", "LangChain", "Groq"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_mockup_1778786312853.png"
  },
  {
    title: "NSE Momentum Burst Scanner",
    description: "Created an automated script that scans Nifty 500 stocks for breakout signals and delivers daily alerts via a Telegram bot.",
    tags: ["Python", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/breakout_monitor_mockup_1778786330940.png"
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
    link: "https://shootersofindia.com",
    image: "/sales_intelligence_mockup_1778786384472.png"
  },
  {
    title: "Autonomous Organizational Memory",
    description: "Built a knowledge base prototype utilizing ChromaDB and RAG pipelines for semantic question-answering.",
    tags: ["Python", "ChromaDB", "RAG", "AI"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/ragmemory_mockup_1778786346410.png"
  },
  {
    title: "Clima-Cast",
    description: "Trained an MLPRegressor model to predict ambient temperature and humidity using historical weather datasets.",
    tags: ["Python", "scikit-learn", "IoT", "Data Science"],
    link: "https://github.com/brrrezy/Clima-Cast",
    image: "/climacast_mockup_1778786421605.png"
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
    { name: "Python", level: 85, slug: "python" },
    { name: "SQL", level: 81, slug: "sqlite" },
    { name: "TypeScript", level: 87, slug: "typescript" },
    { name: "JavaScript", level: 93, slug: "javascript" },
    { name: "HTML/CSS", level: 75, slug: "html5" }
  ],
  frameworks: [
    { name: "FastAPI", level: 85, slug: "fastapi" },
    { name: "Next.js", level: 90, slug: "nextdotjs" },
    { name: "Flask", level: 75, slug: "flask" },
    { name: "LangChain", level: 80, slug: "langchain" }
  ],
  libraries: [
    { name: "Pandas", level: 85, slug: "pandas" },
    { name: "NumPy", level: 80, slug: "numpy" },
    { name: "TA-Lib", level: 75, slug: "tradingview" },
    { name: "Scikit-learn", level: 80, slug: "scikitlearn" },
    { name: "SQLAlchemy", level: 82, slug: "sqlalchemy" }
  ],
  tools: [
    { name: "Docker", level: 80, slug: "docker" },
    { name: "CI/CD", level: 85, slug: "githubactions" },
    { name: "AWS", level: 75, slug: "amazonaws" },
    { name: "PostgreSQL", level: 85, slug: "postgresql" },
    { name: "MongoDB", level: 90, slug: "mongodb" },
    { name: "Vercel", level: 88, slug: "vercel" }
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
    title: "Sunhacks 2026 (Top 10)",
    organization: "Sandip University & ESDS",
    description: "Developed a real-time compliance dashboard tracking regulatory updates from NSE, BSE, MCX, and RBI."
  },
  {
    title: "Sunhacks 2024 (Top 10)",
    organization: "Sandip University & ESDS",
    description: "Designed a predictive model for HVAC energy optimization and smart climate control."
  },
  {
    title: "AICTE Data Science Hackathon (Winner)",
    organization: "AICTE | Pune",
    description: "Secured 1st place in the national-level hackathon. Developed high-accuracy predictive models."
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
