import React, { useState } from "react";
import QuestionOption from "./QuestionOption";
import { decodeHTML } from "../heplers/decodeHTML";
import { useDispatch, useSelector } from "react-redux";
import {
  changeScore,
  addQuestionSelected,
  endCountTime,
} from "../redux/questionSlice";
import { useNavigate } from "react-router-dom";

const QuestionItem = ({
  question,
  currentQuestions,
  options,
  setCurrentQuestions,
}) => {
  const [questionSelected, setQuestionSelected] = useState(undefined);
  const [messageWarning, setMessageWarning] = useState(undefined);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score, amountOfQuestions } = useSelector((state) => state.question);

  const handleAnswerQuestion = () => {
    if (questionSelected === question.correct_answer) {
      dispatch(changeScore(score + 1));
    }

    if (currentQuestions + 1 < amountOfQuestions) {
      setCurrentQuestions(currentQuestions + 1);
    } else {
      dispatch(endCountTime());
      navigate("/summary");
    }
    dispatch(
      addQuestionSelected({ ...question, answer_select: questionSelected })
    );
    setQuestionSelected(undefined);
    setMessageWarning(undefined);
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen mx-2">
      <div className="bg-white p-3 md:p-8 rounded-lg">
        <div className="text-center">
          <h4 className="text-base md:text-xl mb-2 font-semibold text-black">{`Question ${
            currentQuestions + 1
          }/${amountOfQuestions}`}</h4>
        </div>
        <div className="text-center mb-2">
          <span
            className={`uppercase text-white px-6 py-1 inline-block rounded-lg ${
              question.difficulty === "easy"
                ? "bg-[#81FA5F] "
                : question.difficulty === "medium"
                ? "bg-[#EBEE00] "
                : "bg-[#FA6666]"
            }`}
          >
            {question.difficulty}
          </span>
        </div>
        <div className="text-center">
          <p className="text-base md:text-xl mb-4 font-semibold text-black">
            {decodeHTML(question.question)}
          </p>
        </div>
        <div>
          <QuestionOption
            question={question}
            setQuestionSelected={setQuestionSelected}
            questionSelected={questionSelected}
            options={options}
            setMessageWarning={setMessageWarning}
          />
        </div>
        <div className="text-center">
          {messageWarning ? (
            <p className="text-[#FF3A38]">{messageWarning}</p>
          ) : null}
        </div>
        <div className="flex justify-center">
          <button
            className={`${
              questionSelected
                ? "bg-black text-white"
                : "bg-gray-400 text-white"
            } px-12 py-3 mt-10 rounded-lg`}
            disabled={questionSelected ? false : true}
            onClick={handleAnswerQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
