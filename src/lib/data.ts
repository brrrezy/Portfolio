export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Data Enthusiast & Full-Stack Developer",
  education: "Computer Science Student @ Sandip University",
  location: "Varanasi, India - 221010",
  email: "shivanshu.srivastava.work@gmail.com",
  phone: "+91 9198865041",
  tagline: "Specializing in RAG Pipelines, AI Agents, and Predictive Analytics.",
  bio: "Thank you for visiting my portfolio! I'm truly grateful for your time and interest in my work. Let's connect and build something meaningful together. ❤️",
  socials: {
    github: "https://github.com/brrrezy",
    linkedin: "https://www.linkedin.com/in/srivastavashivanshu/",
    twitter: "https://twitter.com/shivanshusr",
  }
};

export const projects = [
  {
    title: "TradeFlow",
    description: "Architected an institutional-grade trading terminal for 200+ traders, achieving sub-second market data updates and automated algorithmic risk management.",
    tags: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "TailwindCSS"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_mockup_1778786278461.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Engineered a high-performance quantitative stock screening engine scanning 2,600+ NSE stocks in under 60 seconds using technical pattern detection.",
    tags: ["Python", "FastAPI", "SQLite", "Railway"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/screener_mockup_1778786293976.png"
  },
  {
    title: "DietGPT",
    description: "Developed an AI-driven fitness coach leveraging LangChain & Groq LLMs to deliver personalized meal plans and automated calorie estimation in under 2s.",
    tags: ["Flask", "Firebase", "LangChain", "Groq"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_mockup_1778786312853.png"
  },
  {
    title: "NSE Momentum Burst Scanner",
    description: "Orchestrated an automated, serverless breakout detection system scanning Nifty 500 stocks to deliver programmatic alerts to 150+ subscribers.",
    tags: ["Python", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/breakout_monitor_mockup_1778786330940.png"
  },
  {
    title: "Aeronexis AI",
    description: "Created a browser-based collaborative simulation experience for engineering workflows, acquiring 1,200+ pre-launch users in 30 days.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
    link: "https://aeronexis.vercel.app",
    image: "/aeronexis_mockup_1778786407702.png"
  },
  {
    title: "Shooters of India",
    description: "Designed and deployed a search-optimized sports analytics platform, increasing organic search visibility by 40% with custom tracking systems.",
    tags: ["HTML/CSS", "JavaScript", "Analytics"],
    link: "https://shootersofindia.com",
    image: "/sales_intelligence_mockup_1778786384472.png"
  },
  {
    title: "Autonomous Organizational Memory",
    description: "Built an autonomous corporate knowledge memory system utilizing ChromaDB vector store and high-accuracy RAG pipelines for semantic Q&A.",
    tags: ["Python", "ChromaDB", "RAG", "AI"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/ragmemory_mockup_1778786346410.png"
  },
  {
    title: "Clima-Cast",
    description: "Trained and optimized an MLPRegressor neural network model to predict temperature and humidity from IoT sensor telemetry with 94% accuracy.",
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
      "Fine-tuned custom XGBoost and Random Forest models, boosting predictive accuracy by 18% and saving 12 hours of manual analysis weekly.",
      "Engineered high-dimensional feature pipelines and behavioral clustering models on 50,000+ consumer records.",
      "Spearheaded a customer segmentation initiative using K-Means, identifying 5 high-value cohorts to tailor marketing campaigns."
    ]
  },
  {
    title: "Python Programming Intern",
    company: "Code Alpha",
    date: "Nov 2023 - Dec 2023",
    location: "Lucknow, India",
    description: [
      "Engineered asynchronous Python automation scripts that reduced runtime by 22% across multi-threaded data pipelines.",
      "Designed and implemented unit tests, improving overall test coverage by 30% and eliminating critical system bugs.",
      "Refactored legacy codebases into modular, OOP architectures, reducing codebase complexity metrics by 15%."
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Sandip University, Nashik",
    date: "2022 - Present",
    location: "Nashik, Maharashtra",
    description: [
      "Specializing in Machine Learning, Deep Learning, and Advanced Data Analytics.",
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Neural Networks, System Architecture.",
      "Maintaining a strong focus on RAG pipelines and Vector Databases in academic research and projects."
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
    { name: "Kubernetes", level: 70, slug: "kubernetes" },
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
    description: "Predictive modeling and deep data analysis to extract actionable business insights from complex datasets."
  },
  {
    id: "02",
    title: "AI Agents",
    description: "Implementing RAG pipelines and autonomous AI agents using LangChain and large language models."
  },
  {
    id: "03",
    title: "Full-Stack Dev",
    description: "Building end-to-end applications with FastAPI, Next.js, and scalable cloud architectures."
  },
  {
    id: "04",
    title: "Machine Learning",
    description: "Training and deploying specialized ML models for high-accuracy predictions on production datasets."
  }
];
