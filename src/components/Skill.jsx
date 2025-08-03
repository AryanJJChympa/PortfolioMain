import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[var(--color-html-icon)]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[var(--color-css-icon)]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[var(--color-js-icon)]" /> },
    { name: "React", icon: <FaReact className="text-[var(--color-react-icon)]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[var(--color-tailwind-icon)]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[var(--color-node-icon)]" /> },
    { name: "MongoDb", icon: <SiMongodb className="text-[var(--color-mongo-icon)]" /> },
  ];

  return (
    <div className="border-b border-border-subtle pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-5xl lg:text-6xl font-thin text-center my-20 text-text-base"
      >
        <span className="text-accent-purple font-sans">S</span>kills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {skills.map((skill) => (
          <motion.div
            className="flex flex-col items-center text-text-base hover:scale-105 transition-transform"
            key={skill.name}
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <span className="text-sm font-light">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
