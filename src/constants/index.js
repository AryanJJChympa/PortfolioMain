import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Hello! I'm Aryan, a 3rd-year BCA student at JECRC University passionate about problem-solving and technology. I specialize in C++ and have solved 200+ DSA problems on platforms like LeetCode and GeeksforGeeks. I'm also diving into Web Development with HTML, CSS, JavaScript, Tailwind, React.js, and currently exploring MERN stack to build dynamic web applications. Eager to keep learning and growing, I’m open to collaborations, internships, and exciting opportunities in software development.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Software Developer Intern",
    company: "EchorTrip",
    description: `
Contributed to the official website for the Echor Trip startup by leading UI design, implementing frontend animations, and managing login and user authentication with Clerk. Built using HTML, CSS, JavaScript, and Bootstrap, the site includes responsive layouts, tabbed navigation, animated itinerary accordions, and integrated social features.
🚀 Launching July 2025`,
    technologies: ["HTML", "CSS", "JS", "Clerk", "Bootstrap"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "EchorTrip",
    image: project1,
    description:
      "A fully functional travel agency website with features like live searching, responsive design, admin panel, booking options, payment gateway, and user authentication.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap", "Clerk"],
    links: ["https://echortrip.com/"],
  },
  {
    title: "Virtual JJC",
    image: project2,
    description:
      "Appealing Frontend Design for a landing page, Visually appealing and Responsive design.",
    //  Learning: hands-on experience in structuring real-world React applications while mastering Tailwind CSS for efficient styling.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    links: ["https://virtual-jjc-front-end.vercel.app/"],
  },
  {
    title: "Netflix Frontend",
    image: project3,
    description:
      "Built a responsive clone of the Netflix India landing page, focusing on replicating the visual design and interactive elements using pure HTML, CSS, and JavaScript.",
    // This project helped strengthen my frontend skills in structuring complex layouts, implementing animations, and improving responsiveness without relying on frameworks. ",
    technologies: ["HTML", "CSS", "Js"],
    links: [
      "https://netview-seven.vercel.app/",
    ],
  },
  {
    title: "Snake Game",
    image: project4,
    description:
      "Developed a classic Snake Game entirely with vanilla HTML, CSS, and JavaScript, focusing on game logic, user interaction, and UI responsiveness.",
    // This project helped me deepen my understanding of DOM manipulation, game loops using requestAnimationFrame(), and local storage management in JavaScript.",
    technologies: ["HTML", "CSS", "JS"],
    links: ["https://snake-game-flax-eta.vercel.app/"],
  },
  // {
  //   title: "Spotify Mini",
  //   image: project5,
  //   description:
  //     "Developed a mini Spotify Clone using my learnings from Js and making it interactive with its play pause features and added some local songs",
  //   // This project helped me deepen my understanding of DOM manipulation, game loops using requestAnimationFrame(), and local storage management in JavaScript.",
  //   technologies: ["HTML", "CSS", "JS"],
  //   links: ["https://snake-game-flax-eta.vercel.app/"],
  // },
];

export const CONTACT = {
  address: "SDC PORTIGO, Pratapnagar, Jaipur-302033",
  phoneNo: "+91-9863956838",
  email: "aryanjjchympa@gmail.com",
};

const age = 18;
if (age === 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
