import { PROJECTS } from "../constants";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="text-4xl lg:text-6xl font-thin text-center my-20 text-neutral-300">
        <span className="text-purple-600 font-sans">P</span>rojects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <div className="flex gap-2">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                {project.links?.map((link, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mr-2 text-purple-400 hover:text-purple-200 transition"
                  >
                    <FaLink />
                  </a>
                ))}
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 border-purple-800 border-2 rounded mt-4 bg-neutral-900 px-2 py-1 text-sm font-medium hover:border-purple-500 text-purple-600"
                >
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
