export const siteConfig = {
  name: "Kumari Bhawna",
  shortName: "bhawna",
  title: "Data Scientist",
  email: "bhawna.julia060@gmail.com",
  phone: "+91 9661012727",
  location: "India",
  /**
   * Public resume. Replace this Drive link if a new file is shared.
   * The file must stay shared as "Anyone with the link".
   */
  resumeUrl:
    "https://drive.google.com/file/d/1lAdlCP0iBg0Hgi1gTKpW6ZXzD1E4iFNN/view",
  social: {
    linkedin: "https://www.linkedin.com/in/kumaribhawna1277861ab",
    linkedinLabel: "linkedin.com/in/kumaribhawna1277861ab",
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Kumari Bhawna",
  title: "Data Scientist",
  tagline:
    "IIT Kharagpur dual-degree Chemical Engineer (Department Rank 3) who builds machine-learning and optimization systems for lending operations, health research, and process design.",
  cta: {
    primary: { label: "Download Resume", href: siteConfig.resumeUrl },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  terminal: {
    command: "cat profile.json",
    output: `{
  "role": "Data Scientist",
  "focus": ["ML", "Optimization", "SQL"],
  "recent": "Navi Technologies",
  "education": "IIT Kharagpur · 9.23",
  "rank": "Department Rank 3"
}`,
  },
};

export const aboutData = {
  paragraphs: [
    "I work at the intersection of data science and operations. At Navi Technologies I was a Business Analyst on collections — deploying a linear-programming model that cut operational call volumes by 30%, forecasting when customers actually pick up, and predicting debit-order mandate failures at 89.6% accuracy.",
    "Before that I spent a summer at York University on a MITACS project predicting anxiety from a 45,000-row health dataset, and published the work as first author at the 30th Annual IEEE STC 2023. At Dr. Reddy's I automated an unsteady batch-distillation process in Python and was offered a pre-placement offer.",
    "I finished a Dual Degree (B.Tech + M.Tech) in Chemical Engineering at IIT Kharagpur with a CGPA of 9.23 and Department Rank 3. The through-line is the same: take a messy operational problem and turn it into a model people can actually run.",
  ],
  stats: [
    { value: "9.23", label: "CGPA · IIT Kharagpur" },
    { value: "Rank 3", label: "Department Rank" },
    { value: "30%", label: "Fewer Outreach Calls" },
    { value: "89.6%", label: "Mandate Model Accuracy" },
  ],
};

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Business Analyst",
    company: "Navi Technologies",
    duration: "May 2024 — Jun 2025",
    bullets: [
      "Deployed a Python linear-programming model across DPD tiers that cut operational call volumes by 30%, while capping collection-efficiency degradation at 0.13% with a constraint matrix built in Databricks",
      "Factored customer ECL segments, call responsiveness, and EMI payment behavior into cohort limits for collection outreach",
      "Built probabilistic and time-series models on SMS, WhatsApp, and call logs to forecast connectivity windows, identifying high-response time slots at 79% accuracy",
      "Redesigned a spatial routing algorithm that raised customer-agent geographic overlap from 40% to 70%, and allocated 300+ agents by region and native language",
      "Trained an XGBoost model to predict debit-order mandate failures at 89.6% accuracy and triggered automated customer nudges from the scores",
      "Automated Account Aggregator request pipelines with SQL exclusion logic, cutting monthly platform cost by 19%, and built SQL forecasts for DPD 8 and DPD 30 collection efficiency",
    ],
    tech: [
      "Python",
      "SQL",
      "Databricks",
      "XGBoost",
      "Linear Programming",
      "Time Series",
    ],
  },
  {
    role: "Research Intern · MITACS GRI",
    company: "York University, Canada",
    duration: "May 2023 — Jul 2023",
    bullets: [
      "Published a primary health-informatics paper as first author at the 30th Annual IEEE STC 2023: Planning for Crisis — Predicting Anxiety Using Machine Learning (8,800 CAD funding)",
      "Trained 8 models to predict GAD scores on 45,000 entries, reaching a 94.45% ROC with a hyperparameter-tuned, bias-mitigated LightGBM model",
      "Ran Kruskal-Wallis, Chi-Square, and Spearman correlation tests to support the psychological analysis",
    ],
    tech: ["LightGBM", "Python", "Statistical Testing", "Health Informatics"],
  },
  {
    role: "Corporate R&D Intern",
    company: "Dr. Reddy's Laboratories",
    duration: "May 2022 — Jul 2022",
    bullets: [
      "Automated an unsteady batch-distillation process with dynamic parameter simulations in Python",
      "Designed a batch strategy that shortened cycle time and raised operating efficiency",
      "Awarded a pre-placement offer at the end of the internship",
    ],
    tech: ["Python", "Process Simulation", "Batch Distillation"],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  detail: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Dual Degree (B.Tech + M.Tech), Chemical Engineering",
    institution: "Indian Institute of Technology, Kharagpur",
    year: "Aug 2019 — May 2024",
    score: "CGPA 9.23",
    detail: "Department Rank 3",
  },
];

export interface ProjectItem {
  title: string;
  org: string;
  duration: string;
  bullets: string[];
  tech: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Social Media Sentiment Analysis",
    org: "Independent project",
    duration: "Jan 2022 — Feb 2022",
    bullets: [
      "Built an NLP model on 1.6 million tweets to predict TV-show preference",
      "Cleaned text with NLTK and converted emoticons into textual features",
      "Engineered a TF-IDF matrix and reached 94% precision with logistic regression",
    ],
    tech: ["NLP", "NLTK", "TF-IDF", "Logistic Regression"],
  },
  {
    title: "Dynamic Face-Mask Detection",
    org: "Computer vision project",
    duration: "Jul 2023 — Aug 2023",
    bullets: [
      "Trained a real-time CNN to detect whether a person is wearing a face mask",
      "Used OpenCV to read frames from a live webcam feed",
      "Trained on 1,376 images and tuned hyperparameters to 96.38% accuracy",
    ],
    tech: ["CNN", "OpenCV", "Computer Vision", "Python"],
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Languages & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy", "PySpark"],
  },
  {
    name: "Machine Learning",
    skills: [
      "Scikit-Learn",
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "LightGBM",
      "NLP",
      "NLTK",
      "OpenCV",
    ],
  },
  {
    name: "Platforms",
    skills: ["AWS", "Databricks", "Trino", "Qdrant", "RAG"],
  },
  {
    name: "Analytics & Tools",
    skills: [
      "Tableau",
      "Power BI",
      "A/B Testing",
      "Git",
      "JIRA",
      "Confluence",
    ],
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "Department Rank 3",
    description:
      "Dual Degree in Chemical Engineering at IIT Kharagpur, CGPA 9.23",
    icon: "graduation",
  },
  {
    title: "IEEE First Author",
    description:
      "Primary health-informatics paper at the 30th Annual IEEE STC 2023, from MITACS research at York University",
    icon: "award",
  },
  {
    title: "MITACS GRI",
    description:
      "Research internship in Canada funded at 8,800 CAD — predicting anxiety with machine learning",
    icon: "trophy",
  },
  {
    title: "Pre-Placement Offer",
    description:
      "Awarded a PPO after the Corporate R&D internship at Dr. Reddy's Laboratories",
    icon: "medal",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Highlights", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
