import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDb" , icon: <SiMongodb className="text-green-500" />}
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="text-5xl lg:text-6xl font-thin text-center my-20 text-neutral-300"
      >
        <span className="text-purple-600 font-sans">S</span>kills
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {skills.map((skill) => (
          <motion.div
            // whileInView={{ opacity: 1, y: 0 }}
            // initial={{ opacity: 0, y: 100 }}
            // transition={{ duration: 1.5}}
            // key={skill.name}
            className="flex flex-col items-center text-neutral-300 hover:scale-105 transition-transform "
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
