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
    setName(values.name);
    localStorage.setItem("quizName", values.name);
    navigate("/quiz-setup-form");
  };

  return (
    <div className="p-16">
      <Header />

      <div className="flex justify-around">
        <div className="flex flex-col items-center p-2.5 w-[45%] font-light font-serif">
          <img
            src="quiz-main.png"
            className="w-4/5 mb-4"
            alt="Quiz Illustration"
          />
          <span className="text-xl">Test your knowledge with Quizzes</span>

          <Formik
            initialValues={{ name: "" }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col justify-evenly w-full text-left p-5">
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
                    if (e.key === "Enter") e.preventDefault(); // optional
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
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
