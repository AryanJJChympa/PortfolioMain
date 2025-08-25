import { PROJECTS } from "../constants";
import { FaLink } from "react-icons/fa";
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Projects = () => {
  return (
    <div className="border-b border-border-subtle pb-20">
      <h2 className="text-4xl lg:text-6xl font-thin text-center my-20 text-[var(--text-secondary)]">
        <span className="text-accent-purple font-sans">P</span>rojects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <Zoom>
              <img src={project.image} width={200} height={200} alt={project.title} className="mb-6 rounded cursor-zoom-in transition-transform duration-300 ease-in-out hover:scale-[1.03]" />
            </Zoom>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex gap-2">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                {project.links?.map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="inline-block mr-2 text-[var(--accent-purple-light)] hover:text-[var(--accent-purple)] transition">
                    <FaLink />
                  </a>
                ))}
              </div>
              <p className="mb-4 text-[var(--text-tertiary)]">{project.description}</p>
              {project.technologies.map((tech, i) => (
                <span key={i} className="mr-2 border-[var(--color-badge-border)] border-2 rounded mt-4 bg-bg-badge px-2 py-1 text-sm font-medium hover:border-[var(--color-hover-border)] text-accent-purple">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
