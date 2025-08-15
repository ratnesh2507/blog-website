import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BlogCard from "../../components/BlogCard";

export default function BlogList() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
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
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
