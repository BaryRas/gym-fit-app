import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

export const ExerciseContext = createContext();
export const CatBodyPartsData = createContext();
export const BodyPart = createContext();
export const SetBodyPart = createContext();

const ExerciceContextProvider = ({ children }) => {
  const exercisesUrl = "https://exercisedb.p.rapidapi.com/exercises";
  const bodyPartUrl =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const [exercises, setExercises] = useState();
  const [bodyPart, setbodyPart] = useState();

  useEffect(() => {
    const exercisesData = async () => {
      const fetchExercisesData = await fetchData(exercisesUrl);
      setExercises([...fetchExercisesData]);
    };
    exercisesData();
    console.log(exercises);
  }, []);

  useEffect(() => {
    const bodyPartData = async () => {
      const fetchExercisesData = await fetchData(bodyPartUrl);
      setbodyPart([...fetchExercisesData]);
    };
    bodyPartData();
    console.log(bodyPart);
  }, []);

  return (
    <ExerciseContext.Provider
      value={{ exercises, setExercises, bodyPart, setbodyPart }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciceContextProvider;
