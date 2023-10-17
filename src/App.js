import Profile from "./components/Profile";
import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Skils from "./components/Skils";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/home" element={<Profile />}></Route>
        <Route path="/skils" element={<Skils />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
