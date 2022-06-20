import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciceContextProvider from "./context/ExercisesContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciceDetail from "./pages/ExerciceDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <ExerciceContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercice/:id" element={<ExerciceDetail />} />
        </Routes>
        <Footer />
      </ExerciceContextProvider>
    </Box>
  );
}

export default App;
