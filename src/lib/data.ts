export const personalInfo = {
  name: "Shivanshu Srivastava",
  role: "Data Scientist & Full-Stack Developer",
  education: "Computer Science Student @ Sandip University",
  location: "Maharashtra, India",
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
    description: "Trading intelligence terminal engineered for intraday and swing traders.",
    tags: ["Next.js 15", "TypeScript", "FastAPI", "MongoDB", "TailwindCSS"],
    link: "https://thetradeflow.vercel.app",
    image: "/tradeflow_mockup_1778786278461.png"
  },
  {
    title: "NSE Swing Screener",
    description: "Quantitative stock screening terminal scanning 2,600+ stocks for setups.",
    tags: ["Python", "FastAPI", "SQLite", "Railway"],
    link: "https://findswingstocks.up.railway.app/",
    image: "/screener_mockup_1778786293976.png"
  },
  {
    title: "DietGPT",
    description: "AI-powered nutrition and fitness coaching platform inspired by modern health design systems.",
    tags: ["Flask", "Firebase", "LangChain", "Groq"],
    link: "https://fixyourdiet.vercel.app",
    image: "/dietgpt_mockup_1778786312853.png"
  },
  {
    title: "NSE Momentum Burst Scanner",
    description: "Orchestrated an automated breakout detection engine for NSE stocks scanning the Nifty 500.",
    tags: ["Python", "GitHub Actions", "Telegram API"],
    link: "https://github.com/brrrezy/NSE-Breakout-Monitor",
    image: "/breakout_monitor_mockup_1778786330940.png"
  },
  {
    title: "Aeronexis AI",
    description: "Engineering design platform providing a browser-based experience for engineering workflows.",
    tags: ["Next.js 15", "Tailwind CSS", "Framer Motion", "MongoDB"],
    link: "https://aeronexis.vercel.app",
    image: "/aeronexis_mockup_1778786407702.png"
  },
  {
    title: "Shooters of India",
    description: "Search-optimized platform for shooting sports with integrated performance analytics.",
    tags: ["HTML/CSS", "JavaScript", "Analytics"],
    link: "https://shootersofindia.com",
    image: "/sales_intelligence_mockup_1778786384472.png"
  },
  {
    title: "Third Eye",
    description: "Autonomous Organizational Memory system capturing decisions, rationale, and context using RAG.",
    tags: ["Python", "ChromaDB", "RAG", "AI"],
    link: "https://github.com/brrrezy/Third-Eye",
    image: "/ragmemory_mockup_1778786346410.png"
  },
  {
    title: "Clima-Cast",
    description: "Modelled an MLPRegressor neural network to predict temperature and humidity from IoT data.",
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
      "Fine-tuned ML models improving prediction accuracy by 15% and workflow efficiency by 20%.",
      "Executed feature engineering and clustering for behavioral data analysis.",
      "Led customer segmentation initiative using K-Means clustering, identifying 5 distinct customer profiles."
    ]
  },
  {
    title: "Python Programming Intern",
    company: "Code Alpha",
    date: "Nov 2023 - Dec 2023",
    location: "Lucknow, India",
    description: [
      "Engineered Python automation scripts and clean-code software solutions, improving execution speed by 15%.",
      "Strengthened core algorithm implementation and real-world dev workflows.",
      "Streamlined code structure ensuring better maintainability across multiple projects."
    ]
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company: "Sandip University, Nashik",
    date: "2022 - Present",
    location: "Maharashtra, India",
    description: [
      "Specializing in Machine Learning, Deep Learning, and Advanced Data Analytics.",
      "Relevant Coursework: Data Structures, Algorithms, Database Systems, Neural Networks.",
      "Maintaining a strong focus on RAG pipelines and Vector Databases in academic research and projects."
    ]
  }
];

export const skills = {
  programming: [
    { name: "Python", level: 75, slug: "python" },
    { name: "SQL", level: 81, slug: "sqlite" },
    { name: "TypeScript", level: 87, slug: "typescript" },
    { name: "JavaScript", level: 93, slug: "javascript" },
    { name: "HTML/CSS", level: 75, slug: "html5" }
  ],
  frameworks: [
    { name: "FastAPI", level: 75, slug: "fastapi" },
    { name: "Next.js 15", level: 81, slug: "nextdotjs" },
    { name: "Flask", level: 87, slug: "flask" },
    { name: "LangChain", level: 93, slug: "langchain" },
    { name: "REST API", level: 75, slug: "insomnia" },
    { name: "Microservices", level: 81, slug: "kubernetes" },
    { name: "Agile", level: 87, slug: "jira" },
    { name: "Scrum", level: 93, slug: "trello" }
  ],
  libraries: [
    { name: "Pandas", level: 75, slug: "pandas" },
    { name: "NumPy", level: 81, slug: "numpy" },
    { name: "TA-Lib", level: 87, slug: "tradingview" },
    { name: "Scikit-learn", level: 93, slug: "scikitlearn" },
    { name: "Recharts", level: 75, slug: "recharts" },
    { name: "SQLAlchemy", level: 81, slug: "sqlalchemy" }
  ],
  tools: [
    { name: "Docker", level: 75, slug: "docker" },
    { name: "Kubernetes", level: 81, slug: "kubernetes" },
    { name: "CI/CD", level: 87, slug: "githubactions" },
    { name: "DevOps", level: 93, slug: "azuredevops" },
    { name: "AWS", level: 75, slug: "amazonaws" },
    { name: "Azure", level: 81, slug: "microsoftazure" },
    { name: "PostgreSQL", level: 87, slug: "postgresql" },
    { name: "MongoDB", level: 93, slug: "mongodb" },
    { name: "Vercel", level: 75, slug: "vercel" },
    { name: "GitHub Actions", level: 81, slug: "githubactions" },
    { name: "JIRA", level: 87, slug: "jira" }
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
    title: "Winner - AICTE Data Science Hackathon",
    organization: "AICTE & Brainovision",
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
