import React, { useContext } from "react";
import { ExerciseContext } from "../context/ExercisesContext";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item }) => {
  const { exercises, filterExercises, setFilterExercises } =
    useContext(ExerciseContext);

  const filterBodyPart = (search) => {
    console.log(search);
    const searchedExercises = exercises.filter(
      (exercise) => exercise.bodyPart.toLowerCase() === search
    );
    setFilterExercises(searchedExercises);
  };

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop:
          filterExercises[0].bodyPart.toLowerCase() === item
            ? "4px solid #FF2625"
            : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        filterBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      {/* <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      /> */}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
