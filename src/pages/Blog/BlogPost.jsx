import { useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Viewing Post: {slug}</h2>
      <p>Post content will be displayed here.</p>
    </div>
  );
}
export default BlogPost;
