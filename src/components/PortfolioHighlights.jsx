// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import project1 from '../assets/project_1.svg';
import project2 from '../assets/project_2.svg';
import project3 from '../assets/project-3.png';

const PortfolioHighlights = () => {
  const projects = [
    {
      id: 1,
      title: "An AI based trip planner",
      image: project1,
      tags: ["API", "React", "Development"],
      link: "https://travelpal-ebon.vercel.app/",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      image: project2,
      tags: ["Portfolio", "Development", "TailwindCSS"],
      link: "https://kaif-azmi.github.io/azmi-kaif/",
    },
    {
      id: 3,
      title: "Car Website",
      image: project3,
      tags: ["Frontend", "Responsive"],
      link: "https://car-brand-website.netlify.app/",
    }
  ];

  return (
    <section id="work" className="section-padding-regular">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-3 sm:mb-4">
            My portfolio highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all hover:border-zinc-600/50 cursor-pointer block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  loading='lazy'
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-zinc-50 font-semibold text-lg sm:text-xl mb-3">
                  {project.title}
                </h3>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs sm:text-sm bg-zinc-700/50 text-zinc-300 rounded-lg border border-zinc-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
