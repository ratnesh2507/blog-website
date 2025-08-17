import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center">
        <div className="text-6xl mb-4">🕵️‍♂️</div>
        <h1 className="text-7xl font-extrabold text-red-500">404</h1>
        <p className="mt-4 text-lg text-gray-700">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <FaHome /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
