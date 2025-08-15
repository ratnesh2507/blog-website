import { useDispatch, useSelector } from "react-redux";
import { loginAsAdmin, logout } from "../store/slices/authSlice";

function useAuth() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const login = () => dispatch(loginAsAdmin());
  const logout = () => dispatch(logout());

  return {
    isAdmin,
    login,
    logout,
  };
}
export default useAuth;
