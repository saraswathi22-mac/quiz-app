import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../components/Question";

const Quiz = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col items-center font-sans">
      {questions ? (
        <>
          <div className="p-1 inline-block bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-lg">
            <div className="bg-white px-4 py-2 rounded-lg">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                <span>{questions[currQues]?.category}</span>
              </h1>
            </div>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          className="m-32"
          color="inherit"
          size={80}
          thickness={1.5}
        />
      )}
    </div>
  );
};

export default Quiz;
