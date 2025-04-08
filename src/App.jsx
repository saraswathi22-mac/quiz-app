import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import axios from "axios";
import Result from "./pages/Result";
import RulesAndSelection from "./pages/RulesAndSelection";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={name} setName={setName} />} />
        <Route
          path="/rules-and-selection"
          element={
            <RulesAndSelection name={name} fetchQuestions={fetchQuestions} />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route path="/result" element={<Result name={name} score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
