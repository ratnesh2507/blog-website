import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatePost } from "../../store/slices/postsSlice";
import { FaArrowLeft } from "react-icons/fa";

function EditPost() {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === id)
  );
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(updatePost(updatedPost));
    navigate("/admin/posts");
  };

  if (!post) {
    return <p className="p-6 text-red-500 mt-20">Post not found.</p>;
  }

  return (
    <div className="p-6 mt-20">
      <Link
        to="/admin/posts"
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <FaArrowLeft /> Back to Posts
      </Link>
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded h-40"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
