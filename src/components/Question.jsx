import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const select = `bg-lime-500 text-white shadow-lg shadow-gray-500`;
  const wrong = `bg-red-500 text-white shadow-lg shadow-gray-500`;

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return select;
    else if (selected === i && selected !== correct) return wrong;
    else if (i === correct) return select;
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="flex flex-col w-full items-center">
      <h1>Question {currQues + 1} :</h1>
      <div className="flex flex-col items-center justify-around p-5 min-h-[350px] w-[95%] mt-2.5 border-solid border-4 border-slate-400">
        <h2>{questions[currQues].question}</h2>
        <div className="flex w-full items-center justify-around flex-1 flex-wrap m-4">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`m-2.5 py-[15px] px-[20px] h-12 w-full sm:w-[46%] border-2 border-solid border-slate-300 shadow-lg  ${
                  selected && handleSelect(i)
                }`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="flex w-full justify-around">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
