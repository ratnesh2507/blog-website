function PostPreview({ title, excerpt, content, image, author }) {
  return (
    <div className="bg-gray-50 shadow-md rounded-2xl p-4">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Live Preview</h3>
      <div className="border rounded-lg overflow-hidden bg-white">
        {image ? (
          <img src={image} alt="Preview" className="w-full h-40 object-cover" />
        ) : (
          <div className="w-full h-40 flex items-center justify-center bg-gray-200 text-gray-500">
            No Image
          </div>
        )}
        <div className="p-4">
          <h4 className="text-lg font-bold mb-2">{title || "Post Title"}</h4>
          <p className="text-sm text-gray-600 mb-2">
            {excerpt || "Short description of the post will appear here."}
          </p>
          <p className="text-xs text-gray-500 mb-2 line-clamp-3">
            {content || "Post content preview..."}
          </p>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{author || "Author Name"}</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
