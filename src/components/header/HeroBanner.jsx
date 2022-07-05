import { Paper, Container } from "@mui/material";
import "./hero-banner.css";
import Navbar from "./Navbar";
import ProgramContentBanner from "./ProgramContentBanner";
import { useParams } from "react-router-dom";
import HomeContentBanner from "./HomeContentBanner";
import HomeCardBanner from "./HomeCardBanner";

function HeroBanner() {
  let { program } = useParams();

  return (
    <Paper className="section" sx={{ mb: { md: "150px", xs: "30px" } }}>
      <div className="overlay"></div>
      <Container className="container">
        <Navbar />
        {program ? <ProgramContentBanner /> : <HomeContentBanner />}
      </Container>
      <HomeCardBanner />
    </Paper>
  );
}

export default HeroBanner;
