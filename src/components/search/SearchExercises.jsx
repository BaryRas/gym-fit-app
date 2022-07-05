import React, { useState, useContext } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { ExerciseContext } from "../../context/ExercisesContext";
import HorizontalScrollbar from "../HorizontalScrollbar";

function SearchExercises() {
  const { exercises, setFilterExercises, bodyPart } =
    useContext(ExerciseContext);
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const searchedExercises = exercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setFilterExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={400}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        fontFamily="Leckerli One"
        color="#FF2625"
        textAlign="center"
      >
        Let's begin ,<br />
        Search your exercise
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar bodyParts={bodyPart} />
      </Box>
    </Stack>
  );
}

export default SearchExercises;