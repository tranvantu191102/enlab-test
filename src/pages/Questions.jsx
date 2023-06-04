import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiQuestion } from "../api/api";
import {
  startCountTime,
  changeScore,
  resetQuestions,
} from "../redux/questionSlice";

import QuestionItem from "../components/QuestionItem";
import Loading from "../components/Loading";
import Helmet from "../components/Helmet";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const [questions, setQuestions] = useState(undefined);
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { amountOfQuestions } = useSelector((state) => state.question);

  useEffect(() => {
    const getAPi = async () => {
      setLoading(true);
      const data = await getApiQuestion(amountOfQuestions);
      setQuestions(data.results);
      setLoading(false);
      dispatch(startCountTime());
      dispatch(changeScore(0));
      dispatch(resetQuestions());
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
  return (
    <div>
      <Helmet title={"Questions"} />
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : questions && questions.length > 0 ? (
        <QuestionItem
          question={questions[currentQuestions]}
          currentQuestions={currentQuestions}
          setCurrentQuestions={setCurrentQuestions}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default Questions;
