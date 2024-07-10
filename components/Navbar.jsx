import React from "react";
import { links } from "../src/data";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import "./navbar.css";
import { useState } from "react";
import parse from "html-react-parser";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show__menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ icon, path, name }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                >
                  {icon}
                  <h3
                    className="nav__name"
                    onClick={() => setShowMenu((prevMenu) => !prevMenu)}
                  >
                    {parse(name)}
                  </h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="nav__toggle"
        onClick={() => setShowMenu((prevMenu) => !prevMenu)}
      >
        <span>
          {" "}
          {showMenu ? <RxCross1 size={20} /> : <CiMenuBurger size={20} />}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
