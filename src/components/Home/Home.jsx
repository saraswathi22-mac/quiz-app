import { TextField } from "@mui/material";
import "./Home.css";

const Home = ({ name, setName }) => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>
          Please fill the details to start the quiz
        </span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
