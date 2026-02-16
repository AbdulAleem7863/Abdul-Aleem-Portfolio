import { useState } from "react";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#3B82F6] selection:text-white">
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="opacity-0 animate-fade-in">
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
