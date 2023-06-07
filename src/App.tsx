import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<div>home page</div>} />
        <Route path="home" element={<div>hell oworld</div>} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
