import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { Link } from "react-router-dom";
import { DonorLogoutAction } from "../utils/actions";

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
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/donor/dashboard"
                className="nav-link hover:text-secondary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donor/dashboard/donations"
                className="nav-link hover:text-secondary"
              >
                My Donations
              </Link>
            </li>
            <li>
              <Link
                to="/donor/dashboard/profile"
                className="nav-link hover:text-secondary"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link className="nav-link hover:text-secondary">About</Link>
            </li>
            <li>
              <Link
                to="/donor/login"
                className="nav-link hover:text-secondary"
                onClick={DonorLogoutAction}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {showInput ? (
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered"
          />
        ) : (
          <a className=" btn btn-ghost text-2xl font-bold">Light Charity</a>
        )}
      </div>
      <div className="navbar-end">
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
