// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const EssentialTools = () => {
  const tools = [
    {
      name: "Figma",
      category: "Design tool",
      icon: "./images/figma.svg",
      
    },
    {
      name: "CSS",
      category: "User Interface",
      icon: "./images/css3.svg",
      
    },
    {
      name: "JavaScript",
      category: "Interaction",
      icon: "./images/javascript.svg",
      
    },
    {
      name: "React",
      category: "Framework",
      icon: "./images/react.svg",
      
    },
    {
      name: "TailwindCSS",
      category: "User Interface",
      icon: "./images/tailwindcss.svg",
      
    },
    {
      name: "Node.JS",
      category: "Web Server",
      icon: "./images/nodejs.svg",
      
    },
    {
      name: "Express.JS",
      category: "Node Framework",
      icon: "./images/expressjs.svg",
      
    },
    {
      name: "C++",
      category: "Problem Solving",
      icon: "./images/cpp.svg",
      
    }
  ];

  return (
    <section id="about" className="section-padding-regular">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-3 sm:mb-4">
            Essential Tools I use
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 rounded-2xl p-5 sm:p-6 border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div>
                  <h3 className="text-zinc-50 font-semibold text-base sm:text-lg">
                    {tool.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    {tool.category}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialTools;

