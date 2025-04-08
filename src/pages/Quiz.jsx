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
          <div className="w-full flex justify-between uppercase m-2.5">
            <span>{questions[currQues]?.category}</span>
            <span>Score : {score}</span>
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
