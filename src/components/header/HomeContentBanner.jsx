import { Stack, Typography, Grid } from "@mui/material";
import Social from "./Social";

function HomeContentBanner() {
  return (
    <Grid
      className="content"
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          color="whitesmoke"
          fontFamily="Leckerli One"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Progress is progress <br />
          No matter how small
        </Typography>
        <Typography
          fontSize="22px"
          fontFamily="Alegreya"
          lineHeight="35px"
          color="whitesmoke"
        >
          Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
          <a
            href="#exercises"
            style={{
              marginTop: "45px",
              textDecoration: "none",
              width: "200px",
              textAlign: "center",
              background: "#FF2625",
              padding: "14px",
              fontSize: "22px",
              textTransform: "none",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Explore Exercises
          </a>
        </Stack>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "block" } }}>
        <Social direction="column" />
      </Grid>
    </Grid>
  );
}

export default HomeContentBanner;
