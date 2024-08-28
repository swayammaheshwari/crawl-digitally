import React, { useEffect } from "react";
import styles from "./assets/style.module.css";

interface HeaderProps {
  focusRef: React.RefObject<HTMLDivElement>;
  mainDivRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ focusRef }) => {
  const action = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 50,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.bottomstyle}>
      <div ref={focusRef} className={styles.focus}></div>
      <section className={styles.header}  >
        <h2>WE CRAWL THE WEB OF</h2>
        <h1>CREATIVITY</h1>

        <div className={styles.scrolling}>
          <div>
            <span> LET'S CRAWL, WALK, AND SOAR TOGETHER.</span>
            <span> LET'S CRAWL, WALK, AND SOAR TOGETHER.</span>
          </div>
        </div>
        <span onClick={action}>SCROLL!</span>
      </section>
    </div>
  );
};

export default Header;
