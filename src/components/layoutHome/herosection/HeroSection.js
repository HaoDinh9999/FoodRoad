import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import classes from "./HeroSection.module.css";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
const HeroSection = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <section className={classes.section}>
      <Container fixed>
        <Grid
          container
          sx={{
            overflow: "hidden",
            margin: "0 auto ",
            padding: "40px 0",
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              margin: "auto 0",
              padding: "16px",
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Experience the food and culture of Sai Gon
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle1"
                sx={{ fontWeight: 500 }}
              >
                A team of experienced tourism professionals will provide you
                with the best advice and tips
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  href="/tours"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/tours");
                  }}
                  size="large"
                  variant="contained"
                >
                  Explorer tour
                </Button>
                <Button onClick={handleToggle} variant="outlined" size="large">
                  <i
                    class="far fa-play-circle"
                    style={{ marginRight: "4px" }}
                  ></i>
                  Watch us
                </Button>
                {open && (
                  <Backdrop
                    sx={{
                      color: "#fff",
                      margin: "0 !important",
                      zIndex: (theme) => theme.zIndex.drawer + 1000,
                    }}
                    open={true}
                    onClick={handleClose}
                  >
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/SJgSeFkihVE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Backdrop>
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ padding: "16px" }}>
            <Grid container rowSpacing={1} columnSpacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <img
                  alt="img"
                  src="https://www.risenta.co.uk/upl/images/522516.jpg"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt="img"
                  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F11%2F02%2Fthe-beet-toast.jpg"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt="img"
                  src="https://www.crazymasalafood.com/wp-content/images/Masoor-Dal-4-square-scaled.jpg"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <img
                  alt="img"
                  src="https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  className={classes["hero-img"]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
