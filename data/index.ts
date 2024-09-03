import { HiReceiptPercent } from "react-icons/hi2";
import * as logoIdx from "../public/techstack";

export const navMenuItems = [
  {
    id: "0",
    title: "About PR",
    url: "/about",
  },
  {
    id: "1",
    title: "Works",
    url: "/works",
  },
  {
    id: "2",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
    onlyMobile: false,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
    href: "/works",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Everyday is a learning day",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/grid.webp",
    href: "/about#skills",
  },
  {
    id: 5,
    title: "Currently building this website. Stay tuned for more updates.",
    description: "PR Verse",
    className: "md:col-span-3 md:row-span-4",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.webp",
    href: "/",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "Let's Collaborate",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-left",
    img: "",
    spareImg: "",
    href: "/contact",
  },
  {
    id: 1,
    title: "See the world through my eyes. Go through the gallery",
    description: "Photography",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] backdrop-filter backdrop-blur-lg bg-black-200",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-Center",
    img: "/gallerybg.webp",
    spareImg: "",
    href: "/gallery",
  },
  {
    id: 2,
    title: "Places I have been to. My travel diaries",
    description: "Travel & Explore",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
    href: "/about#travel",
  },
];

export const projects = [
  {
    id: 1,
    title: "PR verse",
    des: "The site you are looking at right now. A Next.js Portfolio website with Tailwind CSS and TypeScript.",
    img: "/p1.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    repo: "https://github.com/JuniorRaja/pr_portfolio",
    link: "https://pr-dev-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "PR - Digital Resume",
    des: "Minimal and clean digital resume template built with HTML & CSS",
    img: "/p2.jpg",
    iconLists: [
      "/techstack/html5.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
    ],
    repo: "https://github.com/JuniorRaja/pr-digital-resume",
    link: "https://juniorraja.github.io/pr-digital-resume/",
  },
  {
    id: 3,
    title: "Brainwave - AI Chat App",
    des: "A modern landing page for a fictional AI Chat app, built with React, TypeScript, and Tailwind CSS.",
    img: "/p3.jpg",
    iconLists: ["/re.svg", "/tail.svg"],
    repo: "https://github.com/JuniorRaja/Brainwave-ReactJS",
    link: "https://chataibrainwave.netlify.app",
  },
  {
    id: 4,
    title: "FinDashboard",
    des: "A finance dashboard that visualizes data and transactions.",
    img: "/p4.jpg",
    iconLists: [
      "/techstack/html5.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
    ],
    repo: "https://github.com/JuniorRaja/FinDashboard",
    link: "https://findashboardbypr.netlify.app/",
  },
  {
    id: 5,
    title: "Metaverse Landing Page",
    des: "Modern landing page for a fictional Metaverse company, built with React, Framer Motion & Tailwind CSS.",
    img: "/p5.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    repo: "https://github.com/JuniorRaja/FinDashboard",
    link: "https://prmetaversesite.netlify.app/",
  },
  {
    id: 6,
    title: "Bank App Landing Page",
    des: "Modern landing page for a fictional Bank company, built with React and Tailwind CSS.",
    img: "/p6.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    repo: "https://github.com/JuniorRaja/bankApp_reactJS",
    link: "https://hoobank-web.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/JuniorRaja",
  },
  {
    id: 2,
    img: "/insta.svg",
    url: "https://www.instagram.com/prasanna.it.seems/",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/rajendranprasanna/",
  },
  {
    id: 4,
    img: "/mail.svg",
    url: "mailto:contactme@prasannar.com",
  },
];

export const techStack = [
  { img: logoIdx.csharplogo, label: "C#" },
  { img: logoIdx.bootstraplogo, label: "Bootstrap" },
  { img: logoIdx.csslogo, label: "CSS" },
  { img: logoIdx.dotnetcore, label: ".NET Core" },
  { img: logoIdx.express, label: "Express" },
  { img: logoIdx.htmllogo, label: "HTML" },
  { img: logoIdx.gitlogo, label: "Git" },
  { img: logoIdx.Jquerylogo, label: "JQuery" },
  { img: logoIdx.jslogo, label: "JavaScript" },
  { img: logoIdx.mysqllogo, label: "MySQL" },
  { img: logoIdx.nodejslogo, label: "NodeJS" },
  { img: logoIdx.reactlogo, label: "React" },
  { img: logoIdx.reduxlogo, label: "Redux" },
  { img: logoIdx.muilogo, label: "Material-UI" },
  { img: logoIdx.npmlogo, label: "NPM" },
  { img: logoIdx.scsslogo, label: "SCSS" },
  { img: logoIdx.tslogo, label: "TypeScript" },
  { img: logoIdx.vbdotnetlogo, label: "VB.NET" },
  { img: logoIdx.yarnlogo, label: "Yarn" },
];

export const words = [
  "Deputy\u00A0Proj.\u00A0Manager",
  "Full\u00A0Stack\u00A0Developer",
  "Photographer",
];

export const interests = [
  "Web Development",
  "Project Management",
  "Books",
  "Cooking",
  "Photography",
  "Travel",
  "Music",
  "Psychology",
  "UI-UX",
  "Dark Jokes",
  "Photoshop",
];

export const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About PR", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Projects", href: "/works" },
  { name: "Interests", href: "/about#interests" },
  { name: "Skills", href: "/about#skills" },
  { name: "Contact", href: "/contact" },
];

export const roadmap = [
  {
    id: "0",
    title: "Deputy Project Manager - Development",
    text: "Engaged in Software Development Lifecycle (SDLC) from requirement analysis, documentation (functional specifications, technical design), coding & Unit testing to maintenance of proposed applications.",
    date: "Apr 2024",
    status: "Currently",

    colorful: false, //change for border animation
  },
  {
    id: "1",
    title: "Assitant Project Manager - Development",
    text: "Train & monitor Junior Associates’ and provide Knowledge Training about Business process, Coding standards, assign tasks and requirements and track their performance",
    date: "Oct 2022 - Mar 2024",
    status: "Previously",
  },
  {
    id: "2",
    title: "Senior Software Engineer",
    text: "C# · .NET Framework · REST APIs · Computer Science · Communication · Test-Driven Development · .NET Core",
    date: "May 2022 - Oct 2022",
    status: "Previously",
  },
  {
    id: "3",
    title: "Software Engineer Trainee",
    text: "Computer Science · Communication · Test-Driven Development · .NET Core",
    date: "Jun 2019 - Apr 2022",
    status: "Previously",
  },
];
