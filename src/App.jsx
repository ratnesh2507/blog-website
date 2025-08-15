import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Blog pages
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminPosts from "./pages/Admin/AdminPosts";
import NewPost from "./pages/Admin/NewPost";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/posts" element={<AdminPosts />} />
        <Route path="/admin/posts/new" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
