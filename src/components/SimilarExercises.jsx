import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = (props) => {
  const muscle = props.exerciseDetailTarget;
  const equipment = props.exerciseDetailEquipment;
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${muscle}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [equipment, muscle]);

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar exercises={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar exercises={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
