import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
    <Card
      sx={{ maxWidth: 345, borderTop: "1px solid #FF2625" }}
      variant="elevation0"
    >
      <CardMedia
        component="img"
        alt={exercise.name}
        height="326"
        image={exercise.gifUrl}
      />
      <CardActions>
        <Chip
          label={exercise.bodyPart}
          sx={{ bgcolor: "#FFFC40" }}
          variant="outlined"
        />
        <Chip
          label={exercise.target}
          sx={{ bgcolor: "#B30909" }}
          variant="outlined"
        />
      </CardActions>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textDecoration="none"
        >
          {exercise.name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default ExerciseCard;
