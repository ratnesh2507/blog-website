import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogPost() {
  const { slug } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.slug === slug)
  );

  if (!post) {
    return (
      <div className="p-6 text-center mt-20">
        <h2 className="text-2xl font-bold text-red-500">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 mt-20">
      {/* Back Button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors mb-8"
      >
        <FaArrowLeft className="text-sm" /> Back to Blog
      </Link>

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 leading-snug mb-6">
          {post.title}
        </h1>

        {/* Meta Info */}
        <p className="text-sm text-gray-500 mb-8">
          ✍️ By <span className="font-medium text-gray-700">{post.author}</span>{" "}
          • {post.date}
        </p>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[28rem] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
}
