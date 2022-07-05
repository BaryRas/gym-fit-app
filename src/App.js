import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciceContextProvider from "./context/ExercisesContext";
// import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import ExerciceDetail from "./pages/ExerciceDetail";
import Footer from "./components/Footer";
import Program from "./pages/Program";

function App() {
  return (
    <Box>
      <ExerciceContextProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciceDetail />} />
          <Route path="/program" element={<Program />} />
        </Routes>
        <Footer />
      </ExerciceContextProvider>
    </Box>
  );
}

export default App;
