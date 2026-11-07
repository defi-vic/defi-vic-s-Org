/**
 * ====================================================================
 * PORTFOLIO CONTENT DATA STORE
 * ====================================================================
 * All content for the website is stored in this single file.
 * To update, add, or remove anything (projects, skills, experience, etc.),
 * edit the arrays and objects below. Components automatically render updates!
 */

/**
 * PROFILE & HERO CONTENT
 * Basic biographical info, taglines, and call-to-actions.
 */
export const profile = {
  name: "Akinlabu Victor Erioluwa",
  tagline: "Microbiology Student · Chronic Vibe Coder 🧪💻",
  shortBio:
    "Exploring the intersection of science and technology. I'm a final-year Microbiology student and an aspiring builder, learning to use technology and AI to turn ideas into useful digital solutions.",
  statusText: "Final Year Student · Aspiring Builder",
  location: "University of Ilorin, Nigeria",
  aboutIntro: [
    "I'm Akinlabu Victor Erioluwa, a final-year Microbiology student at the University of Ilorin with a growing interest in technology and digital innovation.",
    "My journey started in science and the laboratory, but my curiosity has also led me into the world of technology. I'm currently learning Python and backend development while exploring how AI can help transform ideas into useful products.",
    "I'm still learning, building, and figuring things out, one project at a time. Whether I'm exploring microorganisms or experimenting with a new idea, I enjoy the process of learning and creating.",
    "This portfolio is a snapshot of that journey."
  ],
  traits: [
    {
      label: "Scientific Method",
      detail: "Hypothesis-driven problem solving, disciplined observation, and laboratory precision."
    },
    {
      label: "Vibe Coding & Tech",
      detail: "Hands-on software experiments with Python, backend development, and AI tools."
    },
    {
      label: "Interdisciplinary",
      detail: "Connecting real-world clinical & laboratory needs with digital product concepts."
    }
  ]
};

/**
 * ====================================================================
 * SKILLS
 * ====================================================================
 * HOW TO ADD A NEW SKILL:
 * Find the desired category below and add an item to the `items` array:
 * { name: "Your Skill Name", level: "Optional Level" }
 * (e.g. { name: "Docker", level: "Beginner" } or simply { name: "Figma" })
 *
 * HOW TO ADD A NEW CATEGORY:
 * Append a new object to the `skills` array with:
 * { id: "unique-id", title: "Category Title", icon: "Code2", description: "...", items: [...] }
 */
export const skills = [
  {
    id: "tech-dev",
    title: "Technology & Development",
    icon: "Code2",
    description: "Programming languages, developer tooling, and modern AI-accelerated workflows.",
    accent: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-cyan-400/40",
    items: [
      { name: "Python", level: "Beginner" },
      { name: "Backend Development", level: "Learning" },
      { name: "Visual Studio Code" },
      { name: "GitHub" },
      { name: "AI-Assisted Development" },
      { name: "Google AI Studio" }
    ]
  },
  {
    id: "digital-skills",
    title: "Digital Skills",
    icon: "Laptop",
    description: "Productivity suites, audio/video transcription, and machine learning data curation.",
    accent: "from-cyan-500/20 to-teal-500/20",
    borderAccent: "group-hover:border-teal-400/40",
    items: [
      { name: "Microsoft Word" },
      { name: "Microsoft PowerPoint" },
      { name: "Audio & Video Transcription" },
      { name: "Data Annotation" }
    ]
  },
  {
    id: "lab-science",
    title: "Laboratory & Science",
    icon: "FlaskConical",
    description: "Clinical diagnostic procedures, microscopy, microbiological workflows, and specimen handling.",
    accent: "from-pink-500/20 to-rose-500/20",
    borderAccent: "group-hover:border-pink-400/40",
    items: [
      { name: "Malaria Testing" },
      { name: "Specimen Collection & Processing" },
      { name: "Serological Testing" },
      { name: "Gram Staining" },
      { name: "Scientific Research & Presentation" }
    ]
  }
];

/**
 * ====================================================================
 * PROJECTS
 * ====================================================================
 * HOW TO ADD A NEW PROJECT:
 * Add an object to the `projects` array below:
 * {
 *   id: "my-project",
 *   title: "Project Title",
 *   status: "Concept" | "In Development" | "Live" | "Ongoing",
 *   statusVariant: "blue" | "pink" | "cyan" | "slate",
 *   description: "One or two sentence summary.",
 *   tags: ["Tag 1", "Tag 2"],
 *   liveUrl: "https://...",   // Leave empty "" to hide the Live button
 *   githubUrl: "https://...", // Leave empty "" to hide the GitHub button
 *   image: "",               // Optional image URL
 *   highlights: ["Key feature 1", "Key feature 2"]
 * }
 */
export const projects = [
  {
    id: "kudigo",
    title: "KudiGo",
    status: "Concept / In Development",
    statusVariant: "cyan",
    description:
      "A digital solution concept focused on helping address everyday financial challenges in Nigeria.",
    tags: ["FinTech", "Financial Inclusion", "Product Concept"],
    liveUrl: "",
    githubUrl: "",
    image: "",
    highlights: [
      "Focused on micro-transactions, digital bookkeeping, and everyday cash flow management",
      "Tailored for informal traders, students, and small enterprises across Nigeria",
      "Exploring Python/FastAPI architecture for lightweight transaction settlement logic"
    ]
  },
  {
    id: "guided-care-finder",
    title: "Guided Care Finder",
    status: "Concept",
    statusVariant: "blue",
    description:
      "A healthcare navigation concept designed to help users identify the appropriate hospital department based on their symptoms.",
    tags: ["Healthcare", "User Experience", "AI-Assisted Building"],
    liveUrl: "",
    githubUrl: "",
    image: "",
    highlights: [
      "Bridges microbiological & clinical understanding with accessible digital triage",
      "Reduces patient confusion at clinical entry and speeds up specialist referral matching",
      "Designed with an empathetic, non-intimidating questionnaire interface"
    ]
  },
  {
    id: "experiments",
    title: "Experiments",
    status: "Ongoing",
    statusVariant: "pink",
    description:
      "Smaller projects, prototypes, and ideas I build while learning Python and backend development.",
    tags: ["Python", "Backend", "Prototypes", "AI Workflows"],
    liveUrl: "",
    githubUrl: "https://github.com/defi-vic",
    image: "",
    isExpandable: true,
    emptyStateMessage: "More prototypes and experimental scripts coming soon as I continue learning!",
    // Expandable mini-experiments list
    experimentsList: [
      {
        name: "Python Specimen Log Parser",
        status: "Prototype",
        desc: "A lightweight script parsing laboratory specimen data records into clean structured JSON.",
        tools: ["Python", "JSON"]
      },
      {
        name: "Clinical Symptom Logic Tree",
        status: "In Progress",
        desc: "Algorithmic decision tree mapping common clinical symptoms to primary hospital clinics.",
        tools: ["Python", "Logic Rules"]
      },
      {
        name: "Google AI Studio Prompts & Workflows",
        status: "Exploring",
        desc: "Harnessing multimodal AI prompts to structure scientific summaries and rapid app layouts.",
        tools: ["AI Studio", "Prompt Craft"]
      }
    ]
  }
];

/**
 * ====================================================================
 * EXPERIENCE
 * ====================================================================
 * HOW TO ADD A NEW EXPERIENCE:
 * Add an object to the `experience` array below.
 */
export const experience = [
  {
    id: "siwes",
    program: "Student Industrial Work Experience Scheme (SIWES)",
    role: "Medical Laboratory Intern",
    organization: "Daniel Adewole Awe Medical Centre",
    location: "Ilesha, Osun State, Nigeria",
    period: "Industrial Attachment",
    summary:
      "During my industrial training in a medical laboratory environment, I gained exposure to routine laboratory procedures and clinical microbiology practices. This experience provided foundational insights into healthcare operations and data management workflows.",
    keyExperience: [
      "Malaria testing",
      "Specimen collection and processing",
      "Serological testing",
      "Gram staining",
      "Exposure to microscopy and microbiological laboratory procedures",
      "Understanding laboratory workflow and specimen handling"
    ]
  }
];

/**
 * ====================================================================
 * EDUCATION
 * ====================================================================
 * HOW TO ADD OR UPDATE EDUCATION:
 * Edit the object or add another school item.
 */
export const education = {
  institution: "University of Ilorin",
  degree: "B.Sc. Microbiology",
  status: "Final Year",
  expectedGraduation: "2027",
  quote:
    "Building a foundation in microbiology while exploring technology, research, and digital innovation.",
  highlights: [
    "Comprehensive study of microbial pathology, immunology, and laboratory diagnostics",
    "Active member of scientific and student academic communities",
    "Self-directed learning in programming, Python, and digital development"
  ]
};

/**
 * ====================================================================
 * CAREER GOALS
 * ====================================================================
 */
export const careerGoals = {
  intro: "I'm building a career at the intersection of science, technology, and innovation.",
  paragraphs: [
    "My goal is to continue developing my knowledge of microbiology while gaining practical experience in research and laboratory science. At the same time, I'm growing my technical skills and exploring how software, AI, and digital tools can help solve real-world problems.",
    "In the future, I hope to contribute to meaningful work in science, healthcare, research, or technology, while continuing to learn, build, and explore new opportunities."
  ],
  pillars: [
    {
      title: "Science & Laboratory Science",
      subtitle: "Microbiology, Diagnostics & Research",
      description:
        "Deepening foundational biological knowledge, diagnostic rigor, and laboratory-proven research methodologies."
    },
    {
      title: "Technology & Software Engineering",
      subtitle: "Python, Backend & Tooling",
      description:
        "Developing scalable backend logic, automating analytical workflows, and mastering developer systems."
    },
    {
      title: "HealthTech & Impact Solutions",
      subtitle: "Digital Healthcare Innovation",
      description:
        "Building practical products that simplify patient access, triage routing, and clinical data management."
    }
  ]
};

/**
 * ====================================================================
 * CONTACT & SOCIAL LINKS
 * ====================================================================
 * Update URLs or usernames as needed.
 */
export const contact = {
  email: "vicerioluwaakinlabu@gmail.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/defi-vic",
      handle: "github.com/defi-vic",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victor-akinlabu",
      handle: "Victor Akinlabu",
      icon: "Linkedin"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/vikcrpto",
      handle: "@vikcrpto",
      icon: "Twitter"
    },
    {
      name: "Email",
      url: "mailto:vicerioluwaakinlabu@gmail.com",
      handle: "vicerioluwaakinlabu@gmail.com",
      icon: "Mail"
    }
  ]
};

/**
 * NAVBAR NAVIGATION ITEMS
 */
export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Career Goals", href: "#career-goals" },
  { label: "Contact", href: "#contact" }
];
