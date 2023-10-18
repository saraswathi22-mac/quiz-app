import "./App.css";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { useFetchQuestions } from "./hooks/useFetchQuestions";

function App() {
  const [name, setName] = useState();
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={useFetchQuestions}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
