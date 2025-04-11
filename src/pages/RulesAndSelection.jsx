import { TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { quizCategories } from "../constants/quizCategories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";
import { difficultyLevels } from "../constants/difficultyLevels";

const RulesAndSelection = ({ name, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center m-5 font-light font-serif">
        <span className="text-2xl mb-3">
          Welcome, <span className="font-bold text-3xl">{name}</span> !
        </span>

        <span className="text-xl font-bold">Game On! Here’s How to Play:</span>

        <div className="w-[80%]">
          <Card />
        </div>

        <div className="flex flex-col justify-evenly text-left p-10 w-[60%]">
          {error && <ErrorMessage>Please fill all the fields.</ErrorMessage>}
          <span className="mb-5 text-xl font-bold">
            Which one will you conquer today?
          </span>
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
            autoFocus
          >
            {quizCategories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty Level"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {difficultyLevels.map((level) => (
              <MenuItem key={level.value} value={level.value}>
                {level.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
            className="w-[50%] self-center"
          >
            Let's Go
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RulesAndSelection;
