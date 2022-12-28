import "./App.css";
import Ph from "./components/Ph";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Ph />} path="/" />
          <Route element={<Examples />} path="examples" />
        </Routes>
        <StudentDetails />
      </Router>
    </div>
  );
}

export default App;
