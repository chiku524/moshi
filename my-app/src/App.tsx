import { Nav } from "./components/Nav";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="flex flex-row md:flex-col font-mono bg-slate-700">
      <Nav />
      <div className="flex flex-col w-full h-screen bg-slate-700">
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
