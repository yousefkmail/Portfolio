import { Footer, Navbar } from "./Components";
import { MainRoute } from "./Routes";

function App() {
  return (
    <div className="app-container">
      <div>
        <Navbar />
        <MainRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
