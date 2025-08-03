import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    
    <div>
      <div className="overflow-x-hidden text-[var(--color-text-base)] antialiased selection:bg-[var(--color-selection-bg)] selection:text-[var(--color-selection-text)]">
        <div className="fixed top-0 -z-10 h-full w-full"></div>

        {/* Background glow */}
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-[var(--color-bg-main)] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--color-radial-light),rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-8">  
          <Navbar />
          <Hero />
          <Skill />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
