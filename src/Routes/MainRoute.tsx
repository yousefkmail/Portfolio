import { Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "../Pages";

const MainRoute = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default MainRoute;
