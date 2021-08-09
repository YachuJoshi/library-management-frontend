/* eslint-disable no-undef, react-hooks/rules-of-hooks */

import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import { api } from "../api";
import { toast } from "../components";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    data: {},
  });
  const [loading, setLoading] = useState(false);

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  useEffect(() => {}, [user]);

  const login = async (userName, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        username: userName,
        password,
      });
      const { token, userDetail } = response.data;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
      }
      setUser({
        isLoggedIn: true,
        data: userDetail,
      });
      setLoading(false);
      notify("success", "Welcome!");
      return true;
    } catch (e) {
      setLoading(false);
      notify("error", "Invalid Username / Password");
      return false;
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
    setUser({
      isLoggedIn: false,
      data: {},
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
