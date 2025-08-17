import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBlog,
  FaUserShield,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { isAdmin, login, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    navigate("/admin/login");
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-yellow-600 tracking-tight hover:text-yellow-700 transition-colors"
        >
          The Curious Corner 🕵️‍♂️
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            <FaBlog /> Blogs
          </NavLink>

          {isAdmin ? (
            <>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-yellow-600 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                <FaUserShield /> Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaUserShield /> Admin Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-yellow-600 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors ${
                isActive
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`
            }
          >
            <FaBlog /> Blogs
          </NavLink>

          {isAdmin ? (
            <>
              <NavLink
                to="/admin"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition-colors ${
                    isActive
                      ? "text-yellow-600 font-semibold"
                      : "text-gray-700 hover:text-blue-500"
                  }`
                }
              >
                <FaUserShield /> Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <FaUserShield /> Admin Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
