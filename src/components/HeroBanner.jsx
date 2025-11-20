// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const HeroBanner = () => {
  return (
    <section className="section-padding-hero pt-24 sm:pt-32 lg:pt-40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <img
                src="./images/avatar_1.jpg"
                alt="Kaif"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <span className="text-zinc-400 text-xs sm:text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Available for work
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50 leading-tight">
              Building Scalable Modern Websites for the Future
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="public\Kaif_Azmi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#229cef] text-white font-semibold rounded-lg hover:bg-[#1a7bc7] transition-colors"
              >
                Download CV
                <span className="material-symbols-rounded text-lg">
                  download
                </span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-50 font-medium rounded-lg border border-zinc-700 transition-colors"
              >
                Scroll down
                <span className="material-symbols-rounded text-lg">
                  arrow_downward
                </span>
              </a>
            </div>
          </div>

          <div className="relative lg:order-last flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden w-[68%]">
              <img
                src="./images/avatar_1.jpg"
                alt="Kaif - Web Developer"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Color overlay */}
              <div 
                className="absolute inset-0 rounded-2xl mix-blend-multiply opacity-30"
                style={{ backgroundColor: '#3ca7cf' }}
              ></div>
              {/* Blue glow effect */}
              <div className="absolute -right-8 -top-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

