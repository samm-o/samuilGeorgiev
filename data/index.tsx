const basePath = '/portfolio'

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Extracurriculars", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize high-quality, clean coding practices",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: `${basePath}/b1.svg`,
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with location as I enjoy traveling",
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
      img: `${basePath}/grid.svg`,
      spareImg: `${basePath}/b4.svg`,
    },
  
    {
      id: 5,
      title: "Currently building an automated trading bot",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: `${basePath}/b5.svg`,
      spareImg: `${basePath}/grid.svg`,
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
      title: "Automated trading platform",
      des: "A trading platform that allows user to automate trading pre-defined strategies and provides real-time data for 12000+ US stocks.",
      img: `${basePath}/chart.svg`,
      iconLists: [`${basePath}/re.svg`, `${basePath}/python.svg`, `${basePath}/ts.svg`, `${basePath}/SQL.svg`],
      link: "https://github.com/samm-o/Automatic-Trading-Platform",
    },
    {
      id: 4,
      title: "Summit: Intelligent Insight Stock Research",
      des: "A platform designed to simplify and accelerate stock research by analyzing financial statistics, company performance, stock-specific news, and even global economic indicators.",
      img: `${basePath}/summit.png`,
      iconLists: [`${basePath}/python.svg`, `${basePath}/SQL.svg`, `${basePath}/ts.svg`, `${basePath}/next.svg`]
    },
    {
      id: 2,
      title: "Email service bot",
      des: "Simplify your networking with a bot that sends out your cold calling messages to hundreds of potential employers at a time. Connected with your email account and secured with OAuth2.",
      img: `${basePath}/gmail.svg`,
      iconLists: [`${basePath}/next.svg`, `${basePath}/Java.svg`, `${basePath}/JS.svg`,],
      link: "https://github.com/samm-o/EmailBot.iml",
    },
    {
      id: 3,
      title: "NFL 2024 Moneyline Predictor",
      des: "A tool that predicts the moneyline for NFL games based on historical data and current trends using machine learning algortithms such as XGBoost and Random Forest.",
      img: `${basePath}/NFLdashboard.png`,
      iconLists: [`${basePath}/python.svg`, `${basePath}/JS.svg`],
      link: "https://github.com/samm-o/Sports-Betting-Predictor",
    }
  ];
  
  export const testimonials = [
    {
      id: 1,
      quote: "As a lead driver and mechanical lead in the FIRST Robotics Competition, I achieved notable milestones, ranking 2nd in Canada and 15th globally in the 2023 season. Throughout these competitions, I honed my software utilization skills to optimize robot driving strategies, demonstrating my ability to thrive in high-pressure technological environments.",
      name: "FRC Team 1325 Inverse Paradox",
      title: "Primary Driver & Mechanical/Controls Lead",
      img: `${basePath}/1325.png`,
    },
    {
      id: 2,
      quote: "Led the development of an Options Strategy Builder tool, creating mutable P/L charts and low-latency API endpoints in C++. Optimized a quantitative finance LLM by achieving 100% faster tokenization and engineered a custom self-attention layer, reducing model training time by 25%. The tool improved user engagement by 30% through interactive strategy visualization and real-time configuration capabilities.",
      name: "WatStreet",
      title: "Backend Lead & Quant Developer",
      img: `${basePath}/watstreet.jpeg`,
    }
  ];
  
  const companies = [
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
      title: "Backend Developer Intern",
      desc: "Implemented a secure proxy endpoint in Java for the IAM team's high-performance BFF service, enabling seamless whitelisted domain proxying with Redis for session validation and optimizing traffic processing by 30%. Built a secure logout endpoint utilizing Redis cache for session validation, and refactored SKU services while integrating interface tests into BFF endpoints, increasing unit test coverage by 300%.",
      className: "md:col-span-2",
      thumbnail: `${basePath}/ford.png`,
    },
    {
      id: 2,
      title: "AI Software Developer",
      desc: "Trained generative AI models by crafting complex solutions to prompts using Python, C++, and Java. I led the review of 15+ sets of training data, analyzing code and tracking statistical performance with Datadog. Additionally, I developed detailed documentation comparing crafted solutions with AI-generated code, using text comparison tools to demonstrate improved efficiency and reduced lines of code. AI models, including data preprocessing, model training, and deployment.",
      className: "md:col-span-2",
      thumbnail: `${basePath}/outlier.jpeg`,
    },
    {
      id: 3,
      title: "Automation Developer Intern",
      desc: "Designed and developed automation scripts for the company's front-end services. Implemented  encryption for login tokens to secure user data.",
      className: "md:col-span-2", 
      thumbnail: `${basePath}/ford.png`,
    }
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: `${basePath}/git.svg`,
      href: "https://github.com/samm-o"
    },
    {
      id: 2,
      img: `${basePath}/insta.svg`,
      href: "https://www.instagram.com/_s.georgiev/"
    },
    {
      id: 3,
      img: `${basePath}/link.svg`,
      href: "https://www.linkedin.com/in/samuils-georgiev/"
    },
  ];