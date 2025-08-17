import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import BlogCard from "../../components/BlogCard";

export default function BlogList() {
  const posts = useSelector((state) => state.posts.posts);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Calculate pagination values
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-20">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors mb-6"
      >
        <FaArrowLeft className="text-sm" /> Back to Home
      </Link>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
        📚 All Blog Posts
      </h2>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Prev
            </button>
            <span className="font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl shadow-inner">
          <p className="text-gray-500 text-lg">
            No posts yet. Be the first to create one!
          </p>
          <Link
            to="/admin/posts/new"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Create Post
          </Link>
        </div>
      )}
    </div>
  );
}
