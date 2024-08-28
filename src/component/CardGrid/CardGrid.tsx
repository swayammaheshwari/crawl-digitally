import styles from "./assets/style.module.css";
import React, { useEffect, useRef, useState } from "react";

const CardGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowdivs, setWindowdivs] = useState(0);

  // finding the scroll heigth and width
  useEffect(() => {
    const handleResize = () => {
      const totalScrollableHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const totalScrollableWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );

      const divHeight = 100; // Height of your div in pixels
      const divWidth = 100; // Width of your div in pixels

      const numDivsVertically = Math.floor(totalScrollableHeight / divHeight);
      const numDivsHorizontally = Math.floor(totalScrollableWidth / divWidth);

      setWindowdivs(numDivsVertically * numDivsHorizontally);
    };

    handleResize(); // Calculate initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // insert a div dynamically
  useEffect(() => {
    const getRandomColor = () => "#105f5a";

    const handleMouseMove = (e: MouseEvent) => {
      let x = e?.offsetX;
      let y = e?.offsetY;
      if (e.target instanceof HTMLElement) {
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
      }
    };

    const container = containerRef.current;

    if (container) {
      for (let i = 0; i < windowdivs-25; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(styles.card);
        newDiv.style.setProperty("--clr", getRandomColor());
        newDiv.addEventListener("mousemove", handleMouseMove);
        container.appendChild(newDiv);
      }
    }

    return () => {
      // Clean up if necessary
    };
  }, [windowdivs]);

  return (
    <div style={{ position: "absolute", zIndex: 50 }}>
      <div ref={containerRef} className={styles.container}>
        {/* Divs will be added dynamically here */}
      </div>
    </div>
  );
};

export default CardGrid;
