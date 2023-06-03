import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getApiQuestion } from "../api/api";

import QuestionItem from "../components/QuestionItem";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const [questions, setQuestions] = useState(undefined);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { amountOfQuestions } = useSelector((state) => state.question);

  useEffect(() => {
    const getAPi = async () => {
      setLoading(true);
      const data = await getApiQuestion(amountOfQuestions);
      setQuestions(data.results);
      setLoading(false);
    };
    getAPi();
  }, []);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const question = questions[currentQuestions];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [currentQuestions, questions]);
  console.log(options);

  return loading ? (
    <div>Loading</div>
  ) : questions && questions.length > 0 ? (
    <QuestionItem
      question={questions[currentQuestions]}
      currentQuestions={currentQuestions}
      setCurrentQuestions={setCurrentQuestions}
      options={options}
    />
  ) : null;
};

export default Questions;
