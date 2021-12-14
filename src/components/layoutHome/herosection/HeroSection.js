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
                  src="https://i.guim.co.uk/img/media/bd7ceb011f9b92bf53fb95080e49b459fac46746/0_174_3872_2323/master/3872.jpg?width=1200&quality=85&auto=format&fit=max&s=ef789b013e08d2fb585064c562323f91"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt="img"
                  src="https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/09_2019/food-tour-hai-phong-11.jpg"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <img
                  alt="img"
                  src="https://media.ex-cdn.com/EXP/media.vntravellive.com/files/news/2020/11/05/food-tour-ha-noi-ngay-tro-gio-161620.jpg"
                  className={classes["hero-img"]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <img
                  alt="img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X1tyqKNkLPul5YX9dYmkc3xIJ2biFR_eQQ&usqp=CAU"
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
