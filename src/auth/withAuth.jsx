/* eslint-disable no-undef, react/display-name */

import { useRouter } from "next/router";
import { useAuthContext } from "../context";

export const withAuth = (Component) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const router = useRouter();
      const { loading } = useAuthContext();
      const accessToken = localStorage.getItem("accessToken");

      if (loading) {
        return null;
      }

      if (!accessToken) {
        router.push("/login");
        return null;
      }

      return <Component {...props} />;
    }
    return null;
  };
};
