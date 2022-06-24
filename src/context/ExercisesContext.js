import React, { createContext, useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

export const ExerciseContext = createContext();

const ExerciceContextProvider = ({ children }) => {
  const exercisesUrl = "https://exercisedb.p.rapidapi.com/exercises";
  const bodyPartUrl =
    "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
  const [exercises, setExercises] = useState();
  const [bodyPart, setBodyPart] = useState();

  /**
   * Especialy for exercises component
   */
  const [filterExercises, setFilterExercises] = useState();

  /**
   * Fetch all exercises
   * Exercises are shown in the list of exercises and may change in the future
   */
  useEffect(() => {
    const exercisesData = async () => {
      const fetchExercisesData = await fetchData(exercisesUrl, exerciseOptions);
      setExercises([...fetchExercisesData]);
      setFilterExercises([...fetchExercisesData]);
    };
    exercisesData();
  }, []);

  /**
   * Fetch body part data for the horizontal scroll
   * Nedd those to filter exercises data
   */
  useEffect(() => {
    const bodyPartData = async () => {
      const fetchExercisesData = await fetchData(bodyPartUrl, exerciseOptions);
      setBodyPart([...fetchExercisesData]);
    };
    bodyPartData();
  }, []);

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        setExercises,
        bodyPart,
        setBodyPart,
        filterExercises,
        setFilterExercises,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciceContextProvider;
