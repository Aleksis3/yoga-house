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
      <Grid container spacing={20}>
        <Grid item xs={3}>
          <CardMedia
            title=""
            image={require(`../images/gallery1.jpg`)}
            sx={{ height: "350px" }}
          />
        </Grid>

        <Grid item xs={6}>
          <CardMedia
            title=""
            image={require(`../images/gallery6.jpg`)}
            sx={{ height: "350px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <CardMedia
            title=""
            image={require(`../images/gallery2.jpg`)}
            sx={{ height: "350px" }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1.3} justifyContent={"space-around"}>
        <Grid item xs={4}>
          <CardMedia
            title=""
            image={require(`../images/gallery5.jpg`)}
            sx={{ height: "250px" }}
          />
        </Grid>
        <Grid item xs={4}>
          <CardMedia
            title=""
            image={require(`../images/gallery3.jpg`)}
            sx={{ height: "250px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Gallery;
