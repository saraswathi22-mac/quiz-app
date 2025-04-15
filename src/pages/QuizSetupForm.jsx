import { TextField, MenuItem, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizCategories } from "../constants/quizCategories";
import { difficultyLevels } from "../constants/difficultyLevels";
import Card from "../components/Card";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const QuizSetupForm = ({ name, fetchQuestions }) => {
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    category: "",
    difficulty: "",
  });

  useEffect(() => {
    const storedCategory = localStorage.getItem("quizCategory");
    const storedDifficulty = localStorage.getItem("quizDifficulty");

    setInitialValues({
      category: "",
      difficulty: "",
    });
  }, []);

  const validationSchema = Yup.object({
    category: Yup.string().required("Please select a category."),
    difficulty: Yup.string().required("Please select a difficulty level."),
  });

  const handleSubmit = (values) => {
    localStorage.setItem("quizCategory", values.category);
    localStorage.setItem("quizDifficulty", values.difficulty);
    fetchQuestions(values.category, values.difficulty);
    navigate("/quiz");
  };

  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center m-5 font-light font-serif">
        <span className="text-2xl mb-3">
          Welcome, <span className="font-bold text-3xl">{name}</span>!
        </span>

        <span className="text-xl font-bold">Game On! Here’s How to Play:</span>

        <div className="w-[80%]">
          <Card />
        </div>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col justify-evenly text-left p-10 w-[60%]">
              {/* {(errors.category || errors.difficulty) &&
                (touched.category || touched.difficulty) && (
                  <ErrorMessage>Please fill all the fields.</ErrorMessage>
                )} */}

              <span className="mb-5 text-xl font-bold">
                Which one will you conquer today?
              </span>

              <Field
                as={TextField}
                select
                name="category"
                label="Select Category"
                variant="outlined"
                fullWidth
                style={{ marginBottom: 30 }}
                error={touched.category && Boolean(errors.category)}
                helperText={touched.category && errors.category}
                autoFocus
              >
                {quizCategories.map((item) => (
                  <MenuItem key={item.category} value={item.value}>
                    {item.category}
                  </MenuItem>
                ))}
              </Field>

              <Field
                as={TextField}
                select
                name="difficulty"
                label="Select Difficulty Level"
                variant="outlined"
                fullWidth
                style={{ marginBottom: 30 }}
                error={touched.difficulty && Boolean(errors.difficulty)}
                helperText={touched.difficulty && errors.difficulty}
              >
                {difficultyLevels.map((level) => (
                  <MenuItem key={level.value} value={level.value}>
                    {level.label}
                  </MenuItem>
                ))}
              </Field>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                className="w-[50%] self-center"
              >
                Let's Go
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default QuizSetupForm;
