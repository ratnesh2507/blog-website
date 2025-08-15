import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public pages
import Home from "./pages/Home";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminPosts from "./pages/Admin/AdminPosts";
import NewPost from "./pages/Admin/NewPost";

// Route Protection
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Public routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Admin routes (protected) */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/posts"
          element={
            <PrivateRoute>
              <AdminPosts />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/posts/new"
          element={
            <PrivateRoute>
              <NewPost />
            </PrivateRoute>
          }
        />
        {/* Error route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
