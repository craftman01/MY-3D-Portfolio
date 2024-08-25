import {
    aswa,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    brahma23,
    Aswamedha,
    hackathon,
    brahma,
    claranet,
    blender,
    ps,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
    {
      title: "Artist",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "ps",
      icon: ps,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Brahma'23",
      icon: brahma,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Developed a responsive, user-friendly website for collage tech fest, incorporating an intuitive navigation layout and a seamless event registration system.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality web site.",
        "Designed a mobile-responsive interface ensuring optimal viewing across all devices.",
        "Seamlessly integrated a secure banking gateway for online payments.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Aswamedha",
      icon: aswa,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Developed a responsive, user-friendly website for collage tech fest, incorporating an intuitive navigation layout and a seamless event registration system.",
        "Collaborating with cross-functional teams including designers, and other developers to create high-quality web site.",
        "Designed a mobile-responsive interface ensuring optimal viewing across all devices.",
        "Seamlessly integrated a secure banking gateway for online payments.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "NotSoSecure",
      icon: claranet,
      iconBg: "#383E56",
      date: "September 2023 - May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Create & implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Brahma '23",
      description:
        " web-based Intuitive navigation and a robust booking system enhance the fest's digital presence, offering seamless user experience and improved accessibility for attendees.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: brahma23,
      source_code_link: "https://github.com/r0king/brahma",
    },
    {
      name: "Aswamedha",
      description:
        "web-based Intuitive navigation and a robust booking system enhance the fest's digital presence, offering seamless user experience and improved accessibility for attendees.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        
      ],
      image: Aswamedha,
      source_code_link: "https://github.com/r0king/ashwamedha-home-page",
    },
    {
      name: "Hackathon",
      description:
        " ReactJS-based web app for ASI Shankara Hackathon 2K23 features intuitive navigation and a robust booking system, providing all necessary information seamlessly ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: hackathon,
      source_code_link: "https://github.com/r0king/asiet-hackathon",
    },
    // {
    //   name: "Brahma '23",
    //   description:
    //     " web-based Intuitive navigation and a robust booking system enhance the fest's digital presence, offering seamless user experience and improved accessibility for attendees.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: brahma23,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };