import { CircularProgress } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import Question from "../components/Question";

const Quiz = ({ questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleShuffle = useCallback((options) => {
    return [...options].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    if (!questions || !questions[currentQuestionIndex]) return;

    const shuffled = handleShuffle([
      questions[currentQuestionIndex].correct_answer,
      ...questions[currentQuestionIndex].incorrect_answers,
    ]);
    setOptions(shuffled);
  }, [currentQuestionIndex, questions, handleShuffle]);

  return (
    <div className="flex flex-col items-center font-sans max-w-4xl mx-auto px-4">
      {questions ? (
        <>
          <div className="p-1 inline-block bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 rounded-lg">
            <div className="bg-white px-4 py-2 rounded-lg">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                <span>{questions[currentQuestionIndex]?.category}</span>
              </h1>
            </div>
          </div>

          <Question
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            questions={questions}
            options={options}
            correct={questions[currentQuestionIndex]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center m-32">
          <CircularProgress color="inherit" size={80} thickness={1.5} />
          <p className="mt-4 text-gray-600 text-lg">Loading quiz...</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
