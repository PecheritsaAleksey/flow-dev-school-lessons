import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout as logoutUser } from "../store/slices/authSlice";

export default function useUser() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const login = (credentials) => {
    dispatch(loginUser(credentials));
  };

  const logout = () => {
    dispatch(logoutUser());
  };

  return { user, login, logout };
}
