// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const Footer = () => {
  const sitemapLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Handles", link: "#handles" },
    { label: "Blog", link: "#blog" },
    { label: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Kaif-Azmi",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kaifazmi",
    },
    {
      name: "Twitter X",
      url: "https://x.com/kaif_azmi0",
    },
    {
      name: "CodePen",
      url: "https://codepen.io/your-username",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="section-container section-padding-regular">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-zinc-50 font-semibold text-lg mb-4">Sitemap</h3>
            <ul className="space-y-2">
              {sitemapLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-zinc-400 hover:text-zinc-50 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-50 font-semibold text-lg mb-4">Socials</h3>
            <ul className="space-y-2">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-50 transition-colors text-sm"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-400 text-sm">
            © {currentYear} Kaif Azmi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

