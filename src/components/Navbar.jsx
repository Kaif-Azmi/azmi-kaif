// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// Copyright (c) 2025 Kaif Azmi
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen, onLinkClick }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;
    const linkEl = lastActiveLink.current;
    const boxEl = activeBox.current;
    boxEl.style.top = linkEl.offsetTop + "px";
    boxEl.style.left = linkEl.offsetLeft + "px";
    boxEl.style.width = linkEl.offsetWidth + "px";
    boxEl.style.height = linkEl.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);
  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;
    if (activeBox.current) {
      activeBox.current.style.top = e.target.offsetTop + "px";
      activeBox.current.style.left = e.target.offsetLeft + "px";
      activeBox.current.style.width = e.target.offsetWidth + "px";
      activeBox.current.style.height = e.target.offsetHeight + "px";
    }
  };
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Handles",
      link: "#handles",
      className: "nav-link",
    },
    {
      label: "Blog",
      link: "#blog",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={(e) => {
            activeCurrentLink(e);
            if (onLinkClick) onLinkClick();
          }}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func,
};
export default Navbar;
