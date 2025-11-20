// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const Hero = () => {
  return (
    <section id="home" className="section-padding-hero">
      <div className="section-container">
        <div className="relative bg-zinc-800/50 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-zinc-700/50 overflow-hidden">
          {/* Decorative Logo */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 opacity-10">
            <img
              src="/images/logo-1.svg"
              alt="Decorative Logo"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
            />
          </div>

          {/* Introduction Text */}
          <div className="relative z-10 max-w-2xl">
            <p className="text-zinc-50 text-base sm:text-lg lg:text-xl leading-relaxed">
              Welcome! I'm <span className="font-semibold text-zinc-50">Kaif</span>, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise, I transform your vision into digital masterpieces that excel in both appearance and performance.
            </p>
          </div>

          {/* Statistics */}
          <div className="relative z-10 mt-8 sm:mt-10 lg:mt-12 flex flex-wrap gap-6 sm:gap-8 lg:gap-12">
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50">
                5+
              </span>
              <span className="text-sm sm:text-base text-zinc-400 mt-1">
                Project done
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-50">
                1+
              </span>
              <span className="text-sm sm:text-base text-zinc-400 mt-1">
                Years of experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

