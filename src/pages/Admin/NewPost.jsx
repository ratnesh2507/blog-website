import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPost } from "../../store/slices/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { FaArrowLeft } from "react-icons/fa";

function NewPost() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: nanoid(),
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      excerpt,
      content,
      image,
      author,
      date: new Date().toLocaleDateString(),
    };

    dispatch(addPost(newPost));
    navigate("/admin/posts");
  };

  return (
    <div className="p-6 mt-20">
      <div className="flex gap-3">
        <Link
          to="/admin"
          className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
        <Link
          to="/admin/posts"
          className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
        >
          <FaArrowLeft /> Back to Posts
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
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
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default NewPost;
