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
    <div className="flex flex-col justify-center text-center h-[60vh]">
      <span className="text-bold text-3xl">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className="self-center"
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
