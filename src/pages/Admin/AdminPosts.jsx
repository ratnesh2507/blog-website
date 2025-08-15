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
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/admin"
          className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
        <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
        <Link
          to="/admin/posts/new"
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="p-2 border">{post.title}</td>
                <td className="p-2 border">{post.author}</td>
                <td className="p-2 border">{post.date}</td>
                <td className="p-2 border flex gap-2">
                  <Link
                    to={`/admin/posts/edit/${post.id}`}
                    className="text-blue-700 hover:underline flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPosts;
