import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { nanoid } from "@reduxjs/toolkit";
import usePosts from "../../hooks/usePosts";

function NewPost() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const { createPost } = usePosts();
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

    createPost(newPost);
    navigate("/admin/posts");
  };

  return (
    <div className="p-6 mt-20 flex justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6">
        {/* Back links */}
        <div className="flex gap-4 mb-6">
          <Link
            to="/admin"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaArrowLeft /> Back to Dashboard
          </Link>
          <Link
            to="/admin/posts"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <FaArrowLeft /> Back to Posts
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Create New Post
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, 100))}
              maxLength={100}
              className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="Enter post title"
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {title.length}/100
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block font-medium mb-1">Excerpt</label>
            <input
              type="text"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value.slice(0, 200))}
              maxLength={200}
              className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="Short description of the post"
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {excerpt.length}/200
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block font-medium mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value.slice(0, 5000))}
              maxLength={5000}
              className="w-full border p-3 rounded-lg h-48 resize-none focus:ring focus:ring-blue-200 outline-none"
              placeholder="Write your post here..."
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {content.length}/5000
            </p>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value.slice(0, 500))}
              maxLength={500}
              className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-sm text-gray-500 text-right">
              {image.length}/500
            </p>
          </div>

          {/* Author */}
          <div>
            <label className="block font-medium mb-1">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value.slice(0, 50))}
              maxLength={50}
              className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="Author name"
              required
            />
            <p className="text-sm text-gray-500 text-right">
              {author.length}/50
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
