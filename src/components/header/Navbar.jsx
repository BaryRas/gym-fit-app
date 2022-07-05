import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";

function Navbar() {
  const { id } = useParams();
  const textColor = id ? "#000" : "#FF2625";

  return (
    <Stack
      direction="row"
      className="navbar"
      gap="30px"
      fontFamily="Alegreya"
      fontSize="24px"
      justifyContent="center"
      alignContent="center"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        pt: { sm: "32px", xs: "20px" },
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: `${textColor}`,
        }}
      >
        Home
      </Link>
      <Link
        to="/program"
        style={{
          textDecoration: "none",
          color: `${textColor}`,
        }}
      >
        Program
      </Link>
    </Stack>
  );
}

export default Navbar;
