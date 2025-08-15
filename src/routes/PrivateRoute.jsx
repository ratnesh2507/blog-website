import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;
