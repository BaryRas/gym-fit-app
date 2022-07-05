import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Navbar from "../components/header/Navbar";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <div>
      <Navbar />
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseDetail={exerciseDetail} />
        <SimilarExercises
          exerciseDetailTarget={exerciseDetail.target}
          exerciseDetailEquipment={exerciseDetail.equipment}
        />
      </Box>
    </div>
  );
};

export default ExerciseDetail;
