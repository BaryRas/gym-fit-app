import React, { useContext } from "react";
import { ExerciseContext } from "../context/ExercisesContext";

function Exercises() {
  const { exercises } = useContext(ExerciseContext);

  return (
    <div>
      <h3>Result here</h3>
      <div>
        {exercises.map((item) => (
          <div key={item.id || item}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
