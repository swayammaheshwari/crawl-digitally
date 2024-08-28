import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./style.module.css";
import { Typography } from "@mui/material";

export default function PortfolioPage() {
  return (
    <>
      <Box m={2}>
        <Typography variant="h2" lineHeight="2" align="center">
          Branding
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <div className={styles.img_div}>
                <img
                  src="portfolio_img/portfolio_1.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={styles.img_div}>
                <img
                  src="portfolio_img/portfolio_2.png"
                  alt=""
                  className={styles.responsive_img}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box m={2}>
        <Typography variant="h2" lineHeight="2" align="center">
          {" "}
          Social Media{" "}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_1.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_2.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_1.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_1.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_1.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.img_div}>
              <img
                src="portfolio_img/portfolio_1.png"
                alt=""
                className={styles.responsive_img}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box m={2}>
        <Typography variant="h2" lineHeight="2" align="center"  >
          Youtube
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ZlKnLyKO5UU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ZlKnLyKO5UU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className={styles.you_div}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ZlKnLyKO5UU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
