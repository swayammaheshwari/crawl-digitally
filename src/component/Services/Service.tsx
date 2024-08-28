import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Service = () => {
  const styles: object = {
    main: {
      zIndex: "60",
      position: "relative",
    },
  };
  return (
    <div  >
      <Container>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                color: "white",
                background: "#101010",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#101010",
                color: "white",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#101010",
                color: "white",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#101010",
                color: "white",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#101010",
                color: "white",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: 0.2 }} container spacing={5}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper sx={{ backgroundColor: "#101010" }} style={styles.main}>
              <img
                src="/services_img/Service_1.png"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 2, sm: 1 }}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#101010",
                color: "white",
                display: "grid",
                gap: 2,
                placeItems: "center",
                paddingTop: 4,
              }}
            >
              <h2 style={styles.main}>Design & Development Services</h2>
              <ul style={styles.main}>
                <li>Website Development</li>
                <li>E-Commerce & WordPress</li>
                <li>Application Development</li>
                <li>User Experience</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Service;
