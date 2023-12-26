import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import WorkExperience from "./Pages/WorkExperience/WorkExperience";
import GameDev from "./Pages/Game Development/GameDev";
import WebDev from "./Pages/Web Development/WebDev";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<div>home page</div>} />
        <Route path="home" element={<div>hell oworld</div>} />
        <Route path="workexperience" element={<WorkExperience />}>
          <Route index element={<Navigate to={"gamedevelopment"} />} />
          <Route path="gamedevelopment" element={<GameDev />} />
          <Route path="webdevelopment" element={<WebDev />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
