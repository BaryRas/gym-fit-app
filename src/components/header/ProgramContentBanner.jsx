import { Stack, Typography, Grid } from "@mui/material";
import Social from "./Social";

function ProgramContentBanner() {
  return (
    <Grid
      className="content"
      container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      direction="column"
    >
      <Grid item>
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          color="whitesmoke"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mb="23px"
          mt="30px"
        >
          Welcome to your program <br />
          Choose one or create your own
        </Typography>
        <Stack justifyContent="center" alignItems="center">
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
      <Stack item sx={{ display: { xs: "none", md: "block" } }} mt="25px">
        <Social direction="row" />
      </Stack>
    </Grid>
  );
}

export default ProgramContentBanner;
