import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "winter";
  });

  const toggleSearch = () => {
    setShowInput(!showInput);
  };

  const handleTheme = () => {
    const newTheme = theme === "winter" ? "night" : "winter";

    localStorage.setItem("theme", newTheme);

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className=" btn btn-ghost text-2xl font-bold">Light Charity</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost  btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002
             6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595
              1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item">
              5
            </span>
          </div>
        </button>
        <label className="swap swap-rotate btn btn-ghost btn-circle ">
          <input type="checkbox" onChange={handleTheme} />
          <BsSunFill className="swap-on h-4 w-4" />
          <BsMoonFill className="swap-off h-4 w-4" />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
