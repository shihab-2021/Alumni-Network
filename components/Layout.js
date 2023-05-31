import React from "react";
import Link from "next/link";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
