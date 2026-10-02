export const siteConfig = {
  name: "Kumari Bhawna",
  shortName: "bhawna",
  title: "Business Analyst",
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
  title: "Business Analyst",
  tagline: "IIT Kharagpur dual-degree Chemical Engineer (Department Rank 3) who builds machine-learning models, optimization frameworks, and automated product workflows for high-volume fintech and lending operations.",
  cta: {
    primary: { label: "Download Resume", href: siteConfig.resumeUrl },
    secondary: { label: "Get in Touch", href: "#contact" },
  },
  terminal: {
    command: "cat profile.json",
    output: `{
  "role": "Business Analyst",
  "focus": ["SQL", "Tableau", "Python", "Optimization", "ML Modeling"],
  "recent": "Navi Technologies",
  "education": "IIT Kharagpur · 9.23",
  "rank": "Department Rank 3"
}`,
  },
};

export const aboutData = {
  paragraphs: [
    "I work at the intersection of business analytics, data science and optimization. At Navi Technologies I was a Business Analyst in Collections Vertical, where I single-handedly managed high-risk HRC cases, across early DPD buckets and scaled my operational analytics scope across a fleet of over 300 agents.",
    "During my 14-month tenure, I designed a multi-layered operational architecture: deploying linear programming to cut call volumes by 30%, building time-series models to target optimal user connectivity windows, and integrating an AI Voice Bot to substitute manual human effort with automated product outreach workflows.",
    "Before that I spent a summer at York University on a MITACS project predicting anxiety from a 45,000-row health dataset, and published the work as first author at the 30th Annual IEEE STC 2023. At Dr. Reddy's I automated an unsteady batch-distillation process in Python and was offered a pre-placement offer.",
    "I finished a Dual Degree (B.Tech + M.Tech) in Chemical Engineering at IIT Kharagpur with a CGPA of 9.23 and Department Rank 3. My core strength lies in taking complex, unstructured business bottlenecks and converting them into high-performing automated models that drive down unit costs while safeguarding revenue efficiency.",
  ],
  stats: [
    { value: "9.23", label: "CGPA · IIT Kharagpur" },
    { value: "Rank 3", label: "Department Rank" },
    { value: "30%", label: "Fewer Outreach Calls" },
    { value: "19%", label: "Operational Costs Slashed" },
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
      "Single-handedly managed analytics for the High-Risk Division (HRC) handling early-stage DPD 0-8 buckets, later expanding scope across both HRC and telecalling portfolios up to DPD 30.",
      "Deployed a Python linear-programming optimization framework that reduced total operational call volumes by 30%, while capping collection-efficiency degradation to a minimal 13 basis points via a Databricks constraint matrix.",
      "Factored customer ECL segments, historical call responsiveness, and EMI payment behaviors into cohort limits to transition from brute-force dialing to tailored maximum call thresholds.",
      "Built a time-series connectivity model over app clickstream logs, WhatsApp patterns, and SMS metadata, identifying high-response hourly windows with 79% accuracy to completely offset funnel drop by 5 bips.",
      "Integrated an automated AI Voice Bot for routine customer outreach within early DPD buckets, successfully substituting manual human effort and re-routing core agent capacity to complex recovery portfolios.",
      "Redesigned a spatial routing algorithm that raised customer-agent geographic and linguistic overlap from 40% to 70%, optimizing workforce allocation and reducing average handling time (AHT) for 300+ agents.",
      "Trained an XGBoost model to predict debit-order mandate failures at 89.6% accuracy and engineered automated contextual customer nudges to proactively mitigate transaction drops.",
      "Streamlined Account Aggregator request pipelines with SQL exclusion logic, reducing monthly operational costs by 19%, and built forecasting models for DPD 8 and DPD 30 collection efficiency metrics.",
     ],
    tech: [
      "SQL",
      "Python",
      "Tableau",
      "Databricks",
      "JIRA",
      "Confluence",
      "Linear Programming",
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
