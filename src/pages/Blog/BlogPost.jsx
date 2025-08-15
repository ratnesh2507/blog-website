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
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-500">Post not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        to="/blog"
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <FaArrowLeft /> Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {post.author} on {post.date}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
}
