/** GitHub: https://github.com/Varshuiz — update repo slugs when you publish more projects. */
export const github = {
  username: "Varshuiz",
  profile: "https://github.com/Varshuiz",
} as const;

export type ProjectLink =
  | { kind: "repo"; href: string; label?: string }
  | { kind: "profile"; label?: string };

export const hero = {
  name: "Smriti Mohapatra",
  greeting: "Hello, I'm",
  /** Shown directly under your name (credential line). */
  credential: "Computing Science · University of Alberta",
  tagline:
    "I write code that (mostly) works. ML pipelines, data platforms, full-stack mobile apps. Fourth-year CS student at UAlberta who's spent the last four years building real things for real problems: an ML internship, a research internship, a software dev role, and leading a national STEM org. I love turning complex problems into working software that has actual impact. Let's build something great.",
  location: "Edmonton, AB",
};

/**
 * Hero 3D model (GLB). Export your character (e.g. Ready Player Me) to `public/models/avatar.glb`.
 * If the file has multiple animation clips, set `animationName` to the idle/breathing clip; leave empty to use the default.
 */
export const heroModel = {
  src: "/models/avatar.glb",
  animationName: "" as string | undefined,
};

/** Optional links for the contact section (Ashlyn / Bettina–style CTA band). */
export const contact = {
  email: "",
  linkedin: "",
};

/** Short lines under section headings (editorial, Zanjeel-style friendliness). */
export const sectionCopy = {
  about: "A little about me",
  projects: "Selected work & code",
  contact: "Let's connect",
};

export const education = {
  degree: "Bachelor of Science with Honors in Computing Science",
  school: "University of Alberta",
  dates: "Sep 2022 – April 2026",
  location: "Edmonton, AB",
  highlights: [
    "University of Alberta Regional Excellence Scholarship + International Admission Scholarship",
    "Relevant coursework: CMPUT 204, 267, 291, 328, 333, 365, 366, 401",
  ],
};

export const workExperience = [
  {
    title: "Research Intern",
    org: "University of Alberta",
    detail: "Prof. Evan Davies",
    dates: "May 2025 – Present",
    location: "Edmonton, AB",
    bullets: [
      "Built a web-based ET data visualization platform using Python, Django, Docker",
      "Integrated ACIS and Environment Canada climate datasets",
      "Performed data preprocessing, analysis, and validation",
      "Collaborated with interdisciplinary researchers to translate requirements into technical solutions",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "TestAIng.com",
    dates: "May 2024 – Sep 2024",
    location: "Remote",
    bullets: [
      "Implemented GANs for synthetic data generation using PyTorch and TensorFlow",
      "Built automated testing pipelines in Python to evaluate model performance",
      "Used nbsynthetic library for data analysis workflows",
      "Documented model architecture, evaluation methods, and implementation details",
    ],
  },
  {
    title: "Private Tutor",
    org: "Superprof",
    dates: "Jan 2022 – Present",
    location: "Edmonton, AB",
    bullets: [
      "One-on-one tutoring in mathematics and computer science",
      "Personalized lesson plans adapted to individual learning styles",
      "Clear communication with students and parents",
    ],
  },
];

export const leadership = [
  {
    title: "President",
    org: "CanadaCyberSTEAMChallenge (C3)",
    dates: "May 2025 – Present",
    location: "Edmonton, AB",
    bullets: [
      "Strategic planning, project coordination, and operations for a national STEM competition",
      "Managed a cross-functional team of 10 executive members",
      "Raised $900 through targeted fundraising initiatives",
      "Built partnerships with 5 local organizations; expanded reach to 15–20 schools and 80+ students/month",
      "Facilitated workshops and stakeholder meetings for continuous improvement",
    ],
  },
  {
    title: "Director of Recruitment",
    org: "CanadaCyberSTEAMChallenge (C3)",
    dates: "Jan 2025 – May 2025",
    location: "Edmonton, AB",
    bullets: [
      "Recruited volunteers for C3 UAlberta and its annual event",
      "Social media strategies to boost volunteer engagement and outreach",
    ],
  },
 
];

export const volunteer = [
  {
    title: "Volunteer Presenter",
    org: "Brain Waves Edmonton",
    dates: "2025 – 2026",
    location: "Edmonton, AB",
    bullets: [
      "Delivered presentations to elementary school children on concussion prevention and brain health awareness",
      "Communicated complex health concepts in an engaging, age-appropriate way to young audiences across Edmonton schools",
    ],
  },
  {
    title: "Non-Profit Volunteer",
    org: 'The "5" Freedoms Ranch Rescue & Rehabilitation Society',
    dates: "Sep 2022 – Jan 2023",
    location: "Edmonton, AB",
    bullets: [
      "Fundraising, volunteer recruitment, and team operations",
      "Community outreach in animal rescue and rehabilitation",
    ],
  },
  {
    title: "Event Volunteer / Tabling",
    org: "C3 UAlberta Chapter (Midterm Care Packages)",
    dates: "Oct 2025",
    location: "UAlberta Campus (ECHA, SUB, CAB)",
    bullets: [
      "Tabled and sold midterm care packages to raise funds for the annual C3 event",
      "Booth setup, cleanup, and student engagement",
    ],
  },
];

export const projects: {
  name: string;
  context?: string;
  dates?: string;
  stack: string;
  description: string[];
  github?: ProjectLink;
}[] = [
  {
    name: "Social Work App",
    context: "Jarillo Consulting — CMPUT 401 Capstone",
    dates: "Jan 2026 – Present",
    stack: "React Native, Supabase, Azure, CI/CD, Jest, Docker",
    description: [
      "Full-stack mobile app for a real client (social work case management)",
      "Backend with Supabase, cloud on Azure, CI/CD, and Jest testing",
      "Agile collaboration across design, API integration, and documentation",
    ],
    github: { kind: "profile", label: "Capstone — add repo when public" },
  },
  {
    name: "Evapotranspiration (ET) Calculator Website",
    context: "Research Project",
    dates: "2025",
    stack: "Python, Django, Docker, ACIS, Environment Canada Data",
    description: [
      "Full-stack data platform integrating ACIS and Environment Canada datasets",
      "FAO Penman–Monteith methodology to support irrigation decisions",
      "Modular architecture for pilot deployment across 20+ Alberta agricultural operations",
    ],
    github: {
      kind: "repo",
      href: "https://github.com/Varshuiz/ET-visualization",
      label: "View ET-visualization on GitHub",
    },
  },
  {
    name: "Streamly — Distributed Social Network",
    context: "CMPUT Course Project",
    dates: "2024",
    stack: "Python, Django, PostgreSQL, RESTful API, Docker",
    description: [
      "Streamly: distributed platform connecting multiple servers via REST APIs",
      "Secure cross-server data exchange and content sharing",
      "Documented architecture and integration specifications",
    ],
    github: {
      kind: "repo",
      href: "https://www.youtube.com/watch?v=eP_R_QzpfYU",
      label: "Watch Streamly demo",
    },
  },
  {
    name: "Frolic – Event Lottery System",
    context: "CMPUT Group Project",
    dates: "2024",
    stack: "Java, Android Studio, Firebase, JUnit, Agile, Git, CI/CD",
    description: [
      "Lottery-based event sign-ups, waiting lists, and QR check-in",
      "Multi-role system: users, organizers, admins",
      "Agile delivery with version control and CI/CD",
    ],
    github: { kind: "profile", label: "Group project — link repo if published" },
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "SQL"],
  "Frameworks / libraries": [
    "Django",
    "React Native",
    "TensorFlow",
    "PyTorch",
    "nbsynthetic",
  ],
  Databases: ["PostgreSQL", "Firebase", "Supabase", "SQLite"],
  "DevOps / tools": [
    "Docker",
    "CI/CD",
    "Git",
    "GitHub",
    "Azure",
    "Android Studio",
    "Linux",
    "Apache",
    "OpenSSL",
  ],
  Concepts: [
    "GANs",
    "Reinforcement learning",
    "REST APIs",
    "Distributed systems",
    "Data visualization",
    "Agile / Scrum",
    "A* / search algorithms",
  ],
  Other: [
    "Microsoft Office (Excel, Word, PowerPoint, Visio, Project)",
    "Figma",
  ],
};
