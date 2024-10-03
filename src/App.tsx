import { Footer, Navbar } from "./Components";
import { MainRoute } from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <div>
          <Navbar />
          <MainRoute />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
