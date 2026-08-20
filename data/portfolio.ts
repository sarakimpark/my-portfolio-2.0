import type { Project, Experience, Education, LifeMilestone, SocialLink } from "@/types";

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
    "Today, I focus on building user-centered applications that solve real-world problems and create intuitive, engaging experiences. I thrive on learning new skills, exploring innovative solutions, and tackling complex challenges that push me to grow as a developer. When I'm not coding, you can find me cooking, golfing, traveling, or exploring Los Angeles as a recent transplant.",
  skills: [
    "Javascript",
    "React",
    "React Native",
    "Redux",
    "TypeScript",
    "Python",
    "GraphQL",
    "Node.js",
    "Express.js",
    "Next.js",
    "HTML & CSS",
    "Styled Components",
    "Jest",
    "PostgreSQL",
    "Sequelize",
    "MySQL",
    "MongoDB",
    "AWS",
    "Vercel",
  ],
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Orchid",
    subtitle: "Web Development",
    category: "web",
    description: "E-commerce website with an intuitive shopping experience",
    longDescription:
      "Orchid is a full-stack e-commerce capstone built with a team of engineers. The site includes product browsing, cart management, and a complete shopping experience with a focus on responsive design and reusable UI components. I was responsible for developing the Related Items & Comparison component, including related product and outfit lists, product comparison modals, item removal functionality, and navigation to product detail pages.",
    techStack: ["React", "Styled Components", "Node.js", "Express.js", "Axios", "Jest"],
    imageUrl: "/projects/orchid.svg",
    githubUrl: "https://github.com/rfe2210-FEC-Orchid/FrontEndCapstone",
  },
  {
    id: "2",
    title: "Fuzzy Friends",
    subtitle: "Web Development",
    category: "web",
    description: "Social networking app for pet owners to connect and share",
    longDescription:
      "Fuzzy Friends is a minimum viable product (MVP) social platform where pet owners can discover and connect with other pets through a swipe-based matching experience. Users can swipe right to match or left to pass, and matched users can chat with each other. I was primarily responsible for developing the chat functionality and messaging experience for matched pet owners.",
    techStack: ["TypeScript", "React", "Vite", "Material UI", "Tailwind CSS", "Jest", "Auth0", "Axios", "MongoDB"],
    imageUrl: "/projects/fuzzy-friends.jpg",
    githubUrl: "https://github.com/Emerald-Lake/fuzzy-friends",
  },
  {
    id: "3",
    title: "Merge",
    subtitle: "Mobile Development",
    category: "mobile",
    description: "Personalized medical records app that lets users store and manage their health records in one place.",
    longDescription:
      "Merge is an mobile native app that allows users to securely log in and manage their health records from different healthcare providers in one place. The app helps users organize their health information, track medical records, and easily access their information when needed.",
    techStack: ["React Native", "Expo", "Node.js", "Express.js", "Axios", "PostgreSQL", "Sequelize", "Firebase"],
    imageUrl: "/projects/merge.svg",
    githubUrl: "https://github.com/sarakimpark/Merge",
  },
  {
  id: "4",
  title: "Twiddler",
  subtitle: "Web Development",
  category: "web",
  description: "Twitter-inspired social media feed for sharing posts, connecting with friends, and interacting with a dynamic feed",
  longDescription: "Twiddler is a Twitter-inspired social media app built with JavaScript and jQuery. The site includes a dynamic home feed, user profiles, friends lists, and interactive posts, with a focus on creating an engaging and intuitive user experience. I was responsible for designing the entire user interface and developing the feed functionality, including rendering posts, displaying timestamps, filtering posts by user, and allowing users to create and interact with tweets.",
  techStack: ["JavaScript", "jQuery", "HTML", "CSS"],
  imageUrl: "/projects/twiddler.svg",
  githubUrl: "https://github.com/sarakimpark/seip2210-twiddler",
},
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Chegg",
    role: "Software Engineer",
    period: "Apr 2023 - May 2025",
    location: "Remote",
    description: "Started my career as a Software Engineer I and was later promoted to Software Engineer II on the Commerce Web team",
  },
  {
    id: "2",
    company: "Carrollton-Farmers Branch ISD",
    role: "High School Mathematics Teacher",
    period: "Aug 2019 - Jul 2022",
    location: "Carrollton, TX",
    description: "Taught high school mathematics through the COVID-19 pandemic while preparing to apply to medical school",
  },
  {
    id: "3",
    company: "Elite Prep",
    role: "SAT Instructor & Curriculum Writer",
    period: "Sep 2018 - Sep 2019",
    location: "Plano, TX",
    description: "Moved back to Dallas, TX after college and worked as an SAT instructor during my pre-med gap year",
  },
];

export const education: Education[] = [
  {
    id: "1",
    institution: "UIW School of Osteopathic Medicine",
    degree: "Medical School Acceptance",
    period: "May 2023",
    note: "Accepted to medical school while beginning my career in software engineering",
  },
  {
    id: "2",
    institution: "Hack Reactor",
    degree: "Advanced Software Engineering",
    period: "Oct 2022 - Jan 2023",
    note: "Recipient of a full $18,000 scholarship covering the entire coding bootcamp tuition",
  },
  {
    id: "3",
    institution: "The University of Texas at Austin",
    degree: "BSA in Biochemistry",
    period: "Aug 2015 - May 2018",
    note: "Pre-Med Track, with a Minor in Spanish and a Business Foundation Certificate",
  },
];

export const lifeMilestones: LifeMilestone[] = [
  {
    id: "1",
    milestone: "Wedding & Honeymoon",
    period: "Oct 2025 - Nov 2025",
    location: "Los Angeles, CA",
    description: "Got married and honeymooned to New Zealand, Tahiti, and Bora Bora",
  },
  {
    id: "2",
    milestone: "Wedding Content Creation",
    period: "August 2025",
    location: "Cleveland, OH",
    description: "Started my journey in wedding content creation as a creative side project, producing short-form recap videos for a wedding in Cleveland",
  },
  {
    id: "3",
    milestone: "Chegg Layoff",
    period: "May 2025",
    location: "Los Angeles, CA",
    description: "Impacted by a company-wide layoff, I decided to step away and focus on wedding planning after our venue was affected by the Pacific Palisades wildfire",
  },
  {
    id: "4",
    milestone: "Engagement & Move to LA",
    period: "Aug 2023",
    location: "Los Angeles, CA",
    description: "Got engaged and relocated to pursue new opportunities and explore the creative scene in Los Angeles",
  },
];

export const contactInfo = {
  location: "Los Angeles, CA",
  phone: "(469) 569-6591",
  email: "sara.kimpark1@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { name: "Github", href: "https://github.com/sarakimpark", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/sarakimpark", icon: "linkedin" },
];
