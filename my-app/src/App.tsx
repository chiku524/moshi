import { Nav } from "./components/Nav";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="flex flex-row sm:flex-col font-mono">
      <Nav />
      <div className="flex flex-col w-full h-screen bg-sky-800">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
