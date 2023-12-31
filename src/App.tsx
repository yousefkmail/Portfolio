import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
