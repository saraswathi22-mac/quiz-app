import { Button } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) navigate("/");
  }, [name, navigate]);

  const getMessage = useCallback(() => {
    if (score === 10)
      return `Boom! Perfect Score, ${name} – You’re unstoppable!`;
    if (score > 6) return `You're doing amazing, ${name}. Keep shining!`;
    if (score > 3) return `Almost there, ${name} — let's push it up a notch!`;
    return `Better luck next time, ${name}.`;
  }, [score, name]);

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[60vh] px-4">
      <span className="text-3xl font-bold mb-5 text-gray-800">Your score:</span>
      <div
        className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-600 border-4 border-white text-white text-5xl font-extrabold shadow-xl"
        aria-label={`Your score is ${score}`}
      >
        {score}
      </div>

      <div className="mt-6 mb-10 text-xl sm:text-2xl text-gray-700 font-medium max-w-lg">
        {getMessage()}
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="self-center transition-transform duration-200 hover:scale-105"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Result;
