import CardGrid from "../component/CardGrid/CardGrid";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/NavBar";
import Service from "../component/Services/Service";
import React, { useEffect, useRef, useState } from "react";
import ServicesCard from "../component/Services/ServicesCard";
function Services() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar />
      {windowWidth < 768 ? (
        <>
          {/* <Service /> */}
          <ServicesCard/>
          <Footer />
        </>
      ) : (
        <>
          <CardGrid />
          <Service />
          <Footer />
        </>
      )}
    </>
  );
}

export default Services;
