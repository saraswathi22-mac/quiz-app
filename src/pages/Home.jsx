import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";

const Home = ({ name, setName }) => {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      navigate("/rules-and-selection");
    }
  };

  return (
    <div className="p-16">
      <Header />

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-2.5 w-[45%] font-light font-serif">
          <img src="quiz-main.png" style={{ width: "80%" }} />
          <span className="text-xl">Test your knowledge with Quizzes</span>

          <div className="flex flex-col justify-evenly w-full text-left flex-0.8 p-5">
            {error && (
              <ErrorMessage>Please enter your name to proceed.</ErrorMessage>
            )}
            <TextField
              style={{ marginBottom: 25, marginTop: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
