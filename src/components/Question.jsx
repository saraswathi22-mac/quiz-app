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
      <div className="p-[3px] rounded-xl bg-gradient-to-r from-green-300 to-blue-400 w-[95%] mt-2.5">
        <div className="flex flex-col items-center justify-around p-5 min-h-[350px] w-full rounded-xl bg-white">
          <div className="text-xl font-bold text-gray-500 mb-4 tracking-wide">
            Question {currQues + 1}
          </div>
          <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-center mb-6">
            {questions[currQues]?.question}
          </div>

          <div className="flex w-full items-center justify-around flex-1 flex-wrap m-4 gap-5">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((i) => (
                <button
                  className={`m-2 py-4 px-6 w-full md:w-[55%] text-lg font-semibold rounded-full shadow-md border-2 transition-all  ease-in-out border-transparent hover:scale-105  
          hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 focus:outline-none focus:ring-blue-300 ${
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
              {currQues + 1 === 10 ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
