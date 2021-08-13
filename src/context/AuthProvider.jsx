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
import { createStudent, loginUser } from "../services";

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

  useEffect(() => {
    api.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem("accessToken");
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    });
  }, [user]);

  const signUp = async (studentInfo) => {
    setLoading(true);
    try {
      await createStudent(studentInfo);
      notify("success", "Account Created Successfully!");
      return true;
    } catch (e) {
      notify("error", "Invalid Credentials!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async (userName, password) => {
    setLoading(true);
    try {
      const response = await loginUser(userName, password);
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
      notify("success", "Welcome!");
      return true;
    } catch (e) {
      notify("error", "Invalid Username / Password");
      return false;
    } finally {
      setLoading(false);
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
    <AuthContext.Provider
      value={{ user, setUser, login, logout, signUp, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
