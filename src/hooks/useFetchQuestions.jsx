import { useState } from "react";
import axios from "axios";

export const useFetchQuestions = async (category = "", difficulty = "") => {
  const [questions, setQuestions] = useState();
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
  setQuestions(data.results);
  return questions;
};
