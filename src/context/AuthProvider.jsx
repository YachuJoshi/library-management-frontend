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
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userDetails: {},
  });
  const [loading, setLoading] = useState(false);

  const notify = useCallback((type, message) => {
    toast({ type, message });
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (accessToken) {
      setUser({
        isLoggedIn: true,
        userDetails,
      });
    }
  }, []);

  const login = async (userName, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", {
        username: userName,
        password,
      });
      const { token, userDetails } = response.data;
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", token.accessToken);
        localStorage.setItem("refreshToken", token.refreshToken);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
      }
      setUser({
        isLoggedIn: true,
        userDetails,
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
    setUser({
      isLoggedIn: false,
      userDetails: {},
    });
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
