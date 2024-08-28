import React, { useEffect, useRef, useState } from "react";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Navbar from "../component/Navbar/NavBar";
import PortfolioContain from "../component/porfolio/Portfolio";
import SliderComponent from "../component/SwiperSlider/PortfolioTest";
import MobHeader from "../component/header/mobileHeader/MobHeader";

function Home() {
  const focusRef = useRef<HTMLDivElement>(null);
  const mainDivRef = useRef<HTMLDivElement>(null);

  // for mouseevent
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (focusRef.current) {
        const focus = focusRef.current;

        const targetX = e.pageX - focus.offsetWidth / 2;
        const targetY = e.pageY - focus.offsetHeight / 2;

        // focus.style.transition = "top 0.2s, left 0.2s";
        focus.style.left = `${targetX}px`;
        focus.style.top = `${targetY}px`;
        focus.style.transition = "top 0.1s, left 0.1s";
      }
    };

    const handleMouseLeave = () => {
      document.onmousemove = null; // Clear event listener when mouse leaves the main div
      const focus = focusRef.current;
      if (focus) {
        focus.style.transition = "width 0.3s, height 0.3s";
        focus.style.width = "0"; // Adjust the width and height as needed
        focus.style.height = "0";
      }
    };

    const handleMouseEnter = () => {
      document.onmousemove = handleMouseMove; // Re-add the onmousemove event
      const focus = focusRef.current;
      if (focus) {
        focus.style.transition = "width 0.3s, height 0.3s";
        focus.style.width = "280px"; // Adjust the width and height as needed
        focus.style.height = "280px";
      }
    };

    if (mainDivRef.current) {
      mainDivRef.current.addEventListener("mouseenter", handleMouseEnter);
      mainDivRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (mainDivRef.current) {
        mainDivRef.current.removeEventListener("mouseenter", handleMouseEnter);
        mainDivRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
      document.onmousemove = null; // Clear global event listener on component unmount
    };
  }, []);

  // for media change component

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
        <MobHeader />
      ) : (
        <div ref={mainDivRef}>
          <Header focusRef={focusRef} mainDivRef={mainDivRef} />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 88, paddingTop: "5%" }}>
        <PortfolioContain />
        <SliderComponent />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
