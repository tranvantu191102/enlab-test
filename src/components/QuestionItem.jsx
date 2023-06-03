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
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div>
        <div className="text-center">
          <h4 className="text-xl mb-4 font-semibold text-white">{`Question ${
            currentQuestions + 1
          }/${amountOfQuestions}`}</h4>
        </div>
        <div className="text-center">
          <p className="text-xl mb-4 font-semibold text-white">
            {decodeHTML(question.question)}
          </p>
        </div>
        <div>
          <QuestionOption
            question={question}
            setQuestionSelected={setQuestionSelected}
            questionSelected={questionSelected}
            options={options}
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`${
              questionSelected
                ? "bg-white text-black"
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
