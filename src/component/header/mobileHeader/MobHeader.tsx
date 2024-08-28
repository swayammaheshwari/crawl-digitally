import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import styles from "../assets/style.module.css";

function MobHeader() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const customParticlesOptions = {
    fps_limit: 60,
    interactivity: {
      detectsOn: "canvas",

      events: {
        onClick: {
          enable: true,
          mode: "circle",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          particles_nb: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 1,
      },
    },
    detectRetina: true,
    background: {
      color: "black",
    },
  };

  const action = () => {
    window.scrollTo({
      top: document.body.scrollHeight - 50,
      behavior: "smooth",
    });
  };

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
    <div className="App">
      <Particles
        options={customParticlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <div className={styles.bottomstyle}>
        <section className={styles.header}>
          <h2>WE WAVE THE WEB OF</h2>
          <h1>CREATIVITY</h1>
          {windowWidth < 450 ? (
            <p>LET'S CRAWL, WALK, AND SOAR TOGETHER.</p>
          ) : (
            <div className={styles.scrolling}>
              <div>
                <span> LET'S CRAWL, WALK, AND SOAR TOGETHER.</span>
                <span> LET'S CRAWL, WALK, AND SOAR TOGETHER.</span>
              </div>
            </div>
          )}
          {/* */}

          <span className={styles.jump} onClick={action}>
            SCROLL!
          </span>
        </section>
      </div>
    </div>
  );
}

export default MobHeader;
