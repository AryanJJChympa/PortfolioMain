import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-4xl hover:first-letter:bg-gradient-to-r from-pink-300 via-slate-500 to-purple " >
      
        <span className="text-purple-700">A</span><span>r</span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-300">
        <a
          href="https://www.linkedin.com/in/aryanjjchympa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="hover:text-purple-700"
          >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/aryan_j_chympa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="hover:text-purple-700"
          >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/AryanJJChympa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="hover:text-purple-700"
          >
          <FaGithub />
        </a>
        <a
          href="https://x.com/aryan9157"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter profile"
          className="hover:text-purple-700"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
