import { Link } from "react-router-dom";
import { FaFileAlt, FaPlus, FaClipboardList } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="p-6 mt-24 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
        Admin Dashboard
      </h1>

      {/* Grid Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Manage Posts */}
        <Link
          to="/admin/posts"
          className="flex flex-col items-center justify-center hover:cursor-pointer bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <FaClipboardList className="text-5xl text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Manage Blog Posts
          </h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            View, edit, or delete existing posts
          </p>
        </Link>

        {/* Create New Post */}
        <Link
          to="/admin/posts/new"
          className="flex flex-col items-center justify-center bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <FaPlus className="text-5xl text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Post
          </h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            Add a new blog post to your collection
          </p>
        </Link>

        {/* Analytics Placeholder */}
        <div className="flex flex-col items-center justify-center bg-gray-50 border border-dashed rounded-2xl p-8 shadow-sm opacity-70 cursor-not-allowed">
          <FaFileAlt className="text-5xl text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-500">
            Analytics (Coming Soon)
          </h2>
          <p className="text-gray-400 text-sm text-center mt-2">
            Post stats & engagement tracking
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
