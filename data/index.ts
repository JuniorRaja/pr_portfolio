import * as logoIdx from "../public/techstack";

export const navMenuItems = [
  {
    id: "0",
    title: "About PR",
    url: "/about",
  },
  {
    id: "1",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "2",
    title: "Works",
    url: "/works",
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
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
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
  { name: "Home", href: "#" },
  { name: "About PR", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Interests", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Contact", href: "#" },
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
    text: "rain & monitor Junior Associates’ and provide Knowledge Training about Business process, Coding standards, assign tasks and requirements and track their performance",
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
