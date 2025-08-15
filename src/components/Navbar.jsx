import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaBlog, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { isAdmin, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // fake login
    navigate("/admin");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          The Curious Corner🕵️‍♂️
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-700"
              } hover:text-blue-500`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-700"
              } hover:text-blue-500`
            }
          >
            <FaBlog /> Blogs
          </NavLink>

          {isAdmin ? (
            <>
              <NavLink
                to="/admin/login"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${
                    isActive ? "text-yellow-600 font-semibold" : "text-gray-700"
                  } hover:text-blue-500`
                }
              >
                <FaUserShield /> Admin
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-500"
              >
                <FaSignOutAlt /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 text-gray-700 hover:text-green-500"
            >
              <FaUserShield /> Admin Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
