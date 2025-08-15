import { Link } from "react-router-dom";
import { FaArrowRight, FaBlog, FaUserShield } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">React Blog</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Your daily dose of articles, tutorials, and insights from the world
            of tech.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaBlog /> View Blog
            </Link>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <FaUserShield /> Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Articles
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((post) => (
            <div
              key={post}
              className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <img
                src={`https://picsum.photos/400/250?random=${post}`}
                alt="Post thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Sample Blog Post {post}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero.
                </p>
                <Link
                  to={`/blog/sample-post-${post}`}
                  className="inline-flex items-center gap-1 text-blue-600 mt-4 text-sm hover:underline"
                >
                  Read More <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
