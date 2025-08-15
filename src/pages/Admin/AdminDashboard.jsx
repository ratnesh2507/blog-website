import { Link } from "react-router-dom";
import { FaFileAlt, FaPlus, FaClipboardList } from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Posts */}
        <Link
          to="/admin/posts"
          className="flex flex-col items-center justify-center border p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <FaClipboardList className="text-4xl text-blue-600 mb-3" />
          <h2 className="text-xl font-semibold">Manage Blog Posts</h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            View, edit, or delete existing posts
          </p>
        </Link>

        {/* Create New Post */}
        <Link
          to="/admin/posts/new"
          className="flex flex-col items-center justify-center border p-6 rounded-lg shadow hover:shadow-lg transition"
        >
          <FaPlus className="text-4xl text-green-600 mb-3" />
          <h2 className="text-xl font-semibold">Create New Post</h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            Add a new blog post to your collection
          </p>
        </Link>

        {/* Placeholder for More Admin Features */}
        <div className="flex flex-col items-center justify-center border p-6 rounded-lg shadow opacity-50 cursor-not-allowed">
          <FaFileAlt className="text-4xl text-gray-400 mb-3" />
          <h2 className="text-xl font-semibold">Analytics (Coming Soon)</h2>
          <p className="text-gray-500 text-sm text-center mt-2">
            Post stats & engagement tracking
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
