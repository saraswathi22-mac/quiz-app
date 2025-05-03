import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";

const Home = ({ name, setName }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("quizName");
    if (storedName) {
      setName(storedName);
    }
  }, [setName]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name to proceed."),
  });

  const handleSubmit = (values) => {
    const trimmedName = values.name.trim();
    setName(trimmedName);
    localStorage.setItem("quizName", trimmedName);
    navigate("/quiz-setup-form");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:px-10 lg:px-16">
      <Header />

      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="flex flex-col items-center p-4 w-full lg:w-[45%] font-light font-serif">
          <img
            src="quiz-main.png"
            className="w-4/5 max-w-sm mb-4 bg-gray-200 animate-pulse"
            alt="Quiz Illustration"
            loading="lazy"
          />
          <h1 className="text-lg md:text-xl text-center">
            Test your knowledge with Quizzes
          </h1>

          <Formik
            initialValues={{ name: "" }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col justify-evenly w-full px-2 sm:px-4 md:px-8 lg:px-10 text-left py-5">
                <Field
                  as={TextField}
                  name="name"
                  label="Enter Your Name"
                  variant="outlined"
                  autoFocus
                  style={{ marginBottom: 25, marginTop: 25 }}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.preventDefault();
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className="self-center transition-transform duration-200 hover:scale-105"
                >
                  Get Started
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Home;
