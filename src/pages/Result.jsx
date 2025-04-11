import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  const getMessage = () => {
    if (score === 10)
      return `Boom! Perfect Score, ${name} – You’re unstoppable!`;
    if (score > 6) return `You're doing amazing, ${name}. Keep shining!`;
    if (score > 3) return `Almost there, ${name} — let's push it up a notch!`;
    return `Better luck next time, ${name}.`;
  };

  return (
    <div className="flex flex-col justify-center items-center text-center h-[60vh]">
      <span className="text-bold text-3xl mb-5">Your score:</span>
      <div className="flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-600 border-2 border-gray-300 text-white text-5xl font-bold shadow-lg">
        {score}
      </div>

      <div className="mt-5 mb-10 text-2xl text-gray-700">{getMessage()}</div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="self-center"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Result;
