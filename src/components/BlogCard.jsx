import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="block bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md 
                 transition-transform transform hover:scale-105 duration-300"
    >
      {/* Blog Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      {/* Blog Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
          <span className="flex items-center gap-1">
            <FaCalendarAlt size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <FaUser size={12} /> {post.author}
          </span>
        </div>

        {/* Excerpt with "..." */}
        <p className="text-sm text-gray-600 mt-2">
          {post.excerpt.length > 100
            ? post.excerpt.substring(0, 100) + "..."
            : post.excerpt + "..."}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
