import React, { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [headerRef]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header ref={headerRef} />
      <main className="flex-grow" style={{ paddingTop: `${headerHeight}px` }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
