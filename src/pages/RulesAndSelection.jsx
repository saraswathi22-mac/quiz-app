import { TextField, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import Categories from "../DB/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

const RulesAndSelection = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
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
      <div className="flex flex-col items-center p-2.5 w-[45%] font-light font-serif">
        <span className="text-2xl">
          Hello, {name}
        </span>
        <span className="text-2xl">
          Rules to play the quiz:
        </span>
        <div className="flex flex-col justify-evenly w-full text-left flex-0.8 p-5">
          {error && <ErrorMessage>Please fill all the fields.</ErrorMessage>}
          
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RulesAndSelection;
