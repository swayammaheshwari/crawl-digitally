// import Gallery from "../Carousal/Carousal";
import VideoSection from "../videoSection/VideoSection";
import styles from "./assets/style.module.css";

const PortfolioContain = () => {
  return (
    <>
      <section className={styles.portfolio}>
        <div className={styles.portfolio_div}>
          <hr />
          <h3>About Us</h3>
          <hr />
        </div>
        <VideoSection />
        <div className={styles.contentdiv}>
          <h1>Welcome to Crawl Digitally !</h1>
          <p>
            where we weave the web of creativity. As a passionate creative
            agency, we believe in the power of bold ideas, vivid storytelling,
            and extraordinary experiences. Our team of artistic visionaries and
            tech-savvy wizards collaborates seamlessly to craft awe-inspiring
            digital journeys as we crawl, walk, and ultimately soar to new
            heights.
          </p>
        </div>
        <div className={styles.portfolio_div}>
          <hr />
          <h3>Portfolio</h3>
          <hr />
        </div>
      </section>
    </>
  );
};

export default PortfolioContain;
