import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SpinWheel from "./Components/SpinWheel";
import Result from "./Components/Result";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-lightGreen bgImage">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/spinwheel" element={<SpinWheel />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
