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

  return (
    <div className="flex flex-col justify-center items-center text-center h-[60vh]">
      <span className="text-bold text-3xl mb-5">Your score:</span>
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cyan-300 text-white text-5xl">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-400">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500">
            <p>{score} </p>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-10 text-2xl text-gray-700">
        {(score === 10)
          ? `Boom! Perfect Score, ${name} – You’re unstoppable!`
          : (score > 6)
          ? `You're doing amazing, ${name}. Keep shining!.`
          : (score > 3)
          ? `Almost there, ${name} — let's push it up a notch!.`
          : `Better luck next time ${name}.`}
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="self-center"
        href="/"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Result;
