import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import usePosts from "../../hooks/usePosts";

function EditPost() {
  const { id } = useParams();
  const { posts, editPost } = usePosts();
  const post = posts.find((p) => p.id === id);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  const TITLE_LIMIT = 100;
  const EXCERPT_LIMIT = 200;
  const CONTENT_LIMIT = 5000;
  const IMAGE_LIMIT = 500;
  const AUTHOR_LIMIT = 50;

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setExcerpt(post.excerpt);
      setContent(post.content);
      setImage(post.image);
      setAuthor(post.author);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      image,
      author,
    };
    editPost(updatedPost);
    navigate("/admin/posts");
  };

  if (!post) {
    return (
      <div className="p-6 mt-20 max-w-3xl mx-auto">
        <Link
          to="/admin/posts"
          className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
        >
          <FaArrowLeft /> Back to Posts
        </Link>
        <p className="p-6 text-red-500 mt-10 bg-red-50 rounded-lg">
          Post not found.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-20 max-w-3xl mx-auto">
      {/* Back Link */}
      <Link
        to="/admin/posts"
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <FaArrowLeft /> Back to Posts
      </Link>

      <h2 className="text-3xl font-bold mb-6">✏️ Edit Post</h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white shadow-lg rounded-lg p-6 border"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            maxLength={TITLE_LIMIT}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {title.length}/{TITLE_LIMIT}
          </p>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium mb-1">Excerpt</label>
          <input
            type="text"
            value={excerpt}
            maxLength={EXCERPT_LIMIT}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {excerpt.length}/{EXCERPT_LIMIT}
          </p>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            value={content}
            maxLength={CONTENT_LIMIT}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-48"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {content.length}/{CONTENT_LIMIT}
          </p>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="text"
            value={image}
            maxLength={IMAGE_LIMIT}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">
            {image.length}/{IMAGE_LIMIT}
          </p>
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            value={author}
            maxLength={AUTHOR_LIMIT}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {author.length}/{AUTHOR_LIMIT}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          💾 Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
