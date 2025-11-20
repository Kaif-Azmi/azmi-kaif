// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { useState } from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo-1.svg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 sm:h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
      <div className="relative w-full mx-auto">
        <div className="flex justify-between items-center md:grid md:grid-cols-3 md:items-center w-full">
          <div className="flex items-center">
            <a href="/" className="block">
              <img
                src={logo}
                alt="Kaif-Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </a>
          </div>

          <div className="flex justify-center items-center relative md:col-start-2 md:col-end-3 hidden md:flex">
            <Navbar navOpen={navOpen} onLinkClick={() => setNavOpen(false)} />
          </div>

          <div className="flex justify-end items-center relative md:col-start-3 md:col-end-4">
            <button
              className="menu-btn md:hidden z-50"
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-rounded">
                {navOpen ? "close" : "menu"}
              </span>
            </button>

            <div className="md:hidden">
              <Navbar navOpen={navOpen} onLinkClick={() => setNavOpen(false)} />
            </div>

            <a
              href="#contact"
              className="px-4 py-2 bg-[#229cef] text-white font-semibold rounded-lg hover:bg-[#1a7bc7] transition-colors hidden md:inline-flex whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
