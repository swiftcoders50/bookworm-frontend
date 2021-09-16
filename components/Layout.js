import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useRouter } from "next/dist/client/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showLayout = router.pathname === "/admin-dashboard" ? false : true;
  return (
    <div>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </div>
  );
};

export default Layout;
