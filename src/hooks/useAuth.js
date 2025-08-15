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
