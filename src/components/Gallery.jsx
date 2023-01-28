import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, CardMedia } from "@mui/material";

function Gallery() {
  return (
    <div>
      <Typography
        variant="h3"
        component={"h2"}
        mb={2}
        color="initial"
        textAlign={"center"}
      >
        Gallery
      </Typography>
      <Grid container spacing={{ xs: "5", md: "20" }}>
        <Grid item xs={6} md={3}>
          <CardMedia
            title="woman exercising"
            component={"img"}
            height={"100%"}
            image={require(`../images/gallery1.jpg`)}
            sx={{
              height: { sx: "250px", md: "350px" },
            }}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CardMedia
            title="woman exercising"
            component={"img"}
            height={"100%"}
            image={require(`../images/gallery6.jpg`)}
            sx={{
              height: { sx: "250px", md: "350px" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardMedia
            title="woman exercising"
            component={"img"}
            height={350}
            image={require(`../images/gallery2.jpg`)}
            sx={{
              margin: { xs: "1rem 0", md: "0" },
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: "5", md: "2" }}
        justifyContent={"space-around"}
      >
        {" "}
        <Grid item xs={6} md={4} mt={{ sm: "0", md: "2rem" }}>
          <CardMedia
            title="woman exercising"
            component={"img"}
            sx={{
              height: { sx: "250px", md: "350px" },
            }}
            image={require(`../images/gallery5.jpg`)}
          />
        </Grid>
        <Grid item xs={6} md={4} mt={{ sm: "0", md: "2rem" }}>
          <CardMedia
            title="woman exercising"
            component={"img"}
            height={"100%"}
            sx={{
              height: { sx: "250px", md: "350px" },
            }}
            image={require(`../images/gallery3.jpg`)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Gallery;
