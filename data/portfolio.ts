import type { Project, Experience, Education, SocialLink } from "@/types";

export const siteConfig = {
  name: "Sara Park",
  title: "Software Engineer",
  shortDescription: "Turning creativity into reality",
  resumeUrl: "/resume.pdf",
  email: "sara.kimpark1@gmail.com",
  profileImage: "/profile.jpg",
  designCredit: "Sara Kim Park",
};

export const about = {
  location: "Los Angeles, CA",
  email: "sara.kimpark1@gmail.com",
  bioParagraph1:
    "Hi! I'm Sara — a software engineer passionate about learning and bringing ideas to life. I began my journey in pre-med and even got into medical school, but during my gap year teaching high school math, I discovered programming. What started as a way to make virtual learning more engaging quickly became a passion I couldn't stop exploring. Coding combines the creative freedom and problem-solving challenges I've always loved, while giving me the opportunity to build solutions that make a meaningful impact in education, healthcare, and beyond.",
  bioParagraph2:
    "Today, I focus on building user-centered applications that solve real-world problems and create intuitive, engaging experiences. I thrive on learning new skills, exploring innovative solutions, and tackling complex challenges that push me to grow as a developer. When I'm not coding, you can find me traveling, vlogging, event planning, cooking, or exploring Los Angeles as a recent transplant.",
  skills: [
    "Javascript",
    "React & React Native",
    "Redux",
    "TypeScript",
    "Python",
    "GraphQL",
    "Node.js",
    "Next.js",
    "HTML & CSS",
    "Styled Components",
    "PostgreSQL",
    "Sequelize",
    "MySQL",
    "MongoDB",
    "Jest",
  ],
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Orchid",
    description: "E-commerce website with full shopping and checkout experience.",
    techStack: ["Web Development"],
    githubUrl: "https://github.com/rfe2210-FEC-Orchid/FrontEndCapstone",
  },
  {
    id: "2",
    title: "Fuzzy Friends",
    description: "Social networking app for pet owners to connect and share.",
    techStack: ["Web Development"],
    githubUrl: "https://github.com/Emerald-Lake/fuzzy-friends",
  },
  {
    id: "3",
    title: "Merge",
    description: "Personalized medical records app for managing health information.",
    techStack: ["Mobile App"],
    githubUrl: "https://github.com/sarakimpark/Merge",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Chegg, Inc.",
    role: "Software Engineer",
    period: "Apr 2023 - May 2025",
    location: "Remote",
  },
  {
    id: "2",
    company: "Carrollton-Farmers Branch ISD",
    role: "High School Mathematics Teacher",
    period: "Aug 2019 - Jul 2022",
    location: "Carrollton, TX",
  },
  {
    id: "3",
    company: "Elite Prep",
    role: "SAT Instructor & Curriculum Writer",
    period: "Sep 2018 - Sep 2019",
    location: "Plano, TX",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "UIW School of Osteopathic Medicine",
    degree: "Medical School Acceptance",
    period: "May 2023",
  },
  {
    id: "2",
    institution: "Hack Reactor",
    degree: "Advanced Software Engineering Immersive",
    period: "Oct 2022 - Jan 2023",
    note: "full $18k scholarship recipient",
  },
  {
    id: "3",
    institution: "The University of Texas at Austin",
    degree: "BSA in Biochemistry",
    period: "Aug 2015 - May 2018",
    note: "Minor in Spanish & Business Foundation Certificate",
  },
];

export const contactInfo = {
  location: "Los Angeles, CA",
  phone: "(469) 569-6591",
  email: "sara.kimpark1@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/sarakimpark", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/sarakimpark", icon: "linkedin" },
];
