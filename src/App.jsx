import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Quiz App</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
