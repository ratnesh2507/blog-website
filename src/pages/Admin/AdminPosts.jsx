import { Link } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import usePosts from "../../hooks/usePosts";

function AdminPosts() {
  const { posts, removePost } = usePosts();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      removePost(id);
    }
  };

  return (
    <div className="p-6 mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/admin"
          className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>

        <h2 className="text-2xl font-bold text-gray-800">Manage Blog Posts</h2>

        <Link
          to="/admin/posts/new"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-colors"
        >
          + New Post
        </Link>
      </div>

      {/* Table */}
      {posts.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg border">
          <p className="text-gray-500">No posts found.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg border">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
                <th className="p-3">Title</th>
                <th className="p-3">Author</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 font-medium text-gray-800">
                    {post.title}
                  </td>
                  <td className="p-3 text-gray-600">{post.author}</td>
                  <td className="p-3 text-gray-500">{post.date}</td>
                  <td className="p-3">
                    <div className="flex items-center justify-center gap-4">
                      <Link
                        to={`/admin/posts/edit/${post.id}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaEdit /> Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 transition-colors"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminPosts;
