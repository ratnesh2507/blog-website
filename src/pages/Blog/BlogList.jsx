import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function BlogList() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-20">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      <h2 className="text-3xl font-bold mb-8">All Blog Posts</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-blue-600 mt-4 text-sm hover:underline"
              >
                Read More <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
