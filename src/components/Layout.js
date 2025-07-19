// src/Layout.js
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  const location = useLocation();
  const showNavBar = location.pathname !== "/";

  return (
    <>
      <ScrollToTop />
      {showNavBar && <NavBar />}
      {children}
    </>
  );
}
