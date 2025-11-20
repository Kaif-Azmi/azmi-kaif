// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const Handles = () => {
  const technicalHandles = [
    {
      name: "LeetCode",
      username: "Kaif_Azmi",
      url: "https://leetcode.com/u/Kaif_Azmi",
      icon: "./images/leetcode.svg",
    },
    {
      name: "CodeChef",
      username: "Kaifazmi0",
      url: "https://www.codechef.com/users/Kaifazmi0",
      icon: "./images/codechef.svg",
    },
    {
      name: "GitHub",
      username: "Kaif-Azmi",
      url: "https://github.com/Kaif-Azmi",
      icon: "./images/github.svg",
    },
  ];

  const socialHandles = [
    {
      name: "LinkedIn",
      username: "kaifazmi",
      url: "https://www.linkedin.com/in/kaifazmi",
      icon: "./images/linkedin.svg",
    },
    {
      name: "Twitter / X",
      username: "kaif_azmi0",
      url: "https://x.com/kaif_azmi0",
      icon: "./images/x.svg",
    },
    {
      name: "Discord",
      username: "kaifazmi0",
      url: "https://discord.com/users/1304459419249152082",
      icon: "./images/discord.svg",
    },
    {
      name: "Telegram",
      username: "Kaif_azmi0",
      url: "https://t.me/Kaif_azmi0",
      icon: "./images/telegram.svg",
    },
  ];

  return (
    <section id="handles" className="section-padding-regular">
      <div className="section-container">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-8 sm:mb-10">
            Technical Handles
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {technicalHandles.length > 0 ? (
              technicalHandles.map((handle, index) => (
                <a
                  key={index}
                  href={handle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-800/50 rounded-2xl p-5 sm:p-6 border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all hover:border-zinc-600/50 flex items-center gap-4"
                >
                  {handle.icon && (
                    <img
                      src={handle.icon}
                      alt={handle.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-zinc-50 font-semibold text-base sm:text-lg mb-1">
                      {handle.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {handle.username}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-zinc-400 group-hover:text-zinc-50 transition-colors"
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
                </a>
              ))
            ) : (
              <p className="text-zinc-400 text-sm col-span-full">
                No technical handles added yet.
              </p>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 mb-8 sm:mb-10">
            Social Handles
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {socialHandles.length > 0 ? (
              socialHandles.map((handle, index) => (
                <a
                  key={index}
                  href={handle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-800/50 rounded-2xl p-5 sm:p-6 border border-zinc-700/50 backdrop-blur-sm hover:bg-zinc-800/70 transition-all hover:border-zinc-600/50 flex items-center gap-4"
                >
                  {handle.icon && (
                    <img
                      src={handle.icon}
                      alt={handle.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-zinc-50 font-semibold text-base sm:text-lg mb-1">
                      {handle.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {handle.username}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-zinc-400 group-hover:text-zinc-50 transition-colors"
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
                </a>
              ))
            ) : (
              <p className="text-zinc-400 text-sm col-span-full">
                No social handles added yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Handles;

