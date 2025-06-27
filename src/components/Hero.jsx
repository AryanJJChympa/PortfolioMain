import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aryanprofile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const container2 = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900">
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-wrap items-start">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-8 text-4xl font-thin tracking-tight lg:mt-4 lg:text-6xl"
              >
                Aryan Jain Chympa
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Software Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                variants={container2(1.5)}
                initial="hidden"
                animate="visible"
                src={profilePic}
                alt="Profile picture of Aryan Jain Chympa"
                className="w-40 h-40 sm:w-48 sm:h-48 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-purple-900 shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
