import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";

const cardItems = [
  { num: "01", title: "Motivate", text: "" },
  { num: "02", title: "Health", text: "" },
  { num: "03", title: "Fitness", text: "" },
];

function HomeCardBanner() {
  return (
    <Box sx={{ display: { lg: "block", xs: "none" } }}>
      <Grid container spacing={2} className="card-banner">
        {cardItems.map((cardItem, idx) => (
          <Grid item key={idx}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    fontFamily="Londrina Shadow"
                  >
                    {cardItem.num}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "#FF2625" }}
                  >
                    {cardItem.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomeCardBanner;
