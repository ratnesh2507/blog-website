import { useDispatch, useSelector } from "react-redux";
import {
  loginAsAdmin,
  logout as logoutAction,
} from "../store/slices/authSlice";

function useAuth() {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const login = () => dispatch(loginAsAdmin());
  const logout = () => dispatch(logoutAction()); // fixed auth logout action

  return {
    isAdmin,
    login,
    logout,
  };
}

export default useAuth;
