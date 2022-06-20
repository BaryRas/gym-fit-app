import React, { useContext } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Loader from "../components/Loader";
import Exercises from "../components/Exercises";
import { ExerciseContext } from "../context/ExercisesContext";

function Home() {
  const { exercises, bodyPart } = useContext(ExerciseContext);
  console.log(exercises, bodyPart);

  if (exercises !== undefined && exercises !== null) {
    return (
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    );
  } else {
    return (
      <Box>
        <Loader />
      </Box>
    );
  }
}

export default Home;
