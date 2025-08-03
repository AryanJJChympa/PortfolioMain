import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="mb-20 py-6 grid grid-cols-3 items-center">
      {/* Left: Logo */}
      <div className="flex items-center text-4xl hover:first-letter:bg-gradient-to-r from-[var(--gradient-logo-hover-from)] via-[var(--gradient-logo-hover-via)] to-[var(--gradient-logo-hover-to)]">
        <span className="text-accent-purple">A</span>
        <span>r</span>
      </div>

      {/* Center: Theme Toggle */}
      <div className="flex justify-center">
        <ThemeToggle />
      </div>

      {/* Right: Social Icons */}
      <div className="flex justify-end items-center gap-4 text-2xl text-text-base">
        <a
          href="https://www.linkedin.com/in/aryanjjchympa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="hover:text-[var(--color-hover-purple)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/aryan_j_chympa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="hover:text-[var(--color-hover-purple)]"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/AryanJJChympa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="hover:text-[var(--color-hover-purple)]"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/aryan9157"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter profile"
          className="hover:text-[var(--color-hover-purple)]"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
