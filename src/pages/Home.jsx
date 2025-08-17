import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBlog, FaUserShield } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";

export default function Home() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="bg-gray-50 min-h-screen mt-5">
      {/* Hero Section */}
      <motion.section
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.h1
            className="text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to{" "}
            <span className="text-yellow-600">The Curious Corner 🕵️‍♂️</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Your daily dose of articles, tutorials, and insights from the world
            of tech.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 hover:cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaBlog /> View Blog
            </Link>
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-2 hover:cursor-pointer border border-gray-300 hover:bg-green-700 text-gray-700 hover:text-white px-6 py-3 rounded-lg transition"
            >
              <FaUserShield /> Admin Login
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Posts Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Featured Articles
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
