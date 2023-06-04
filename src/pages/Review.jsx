import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decodeHTML } from "../heplers/decodeHTML";
import { useNavigate } from "react-router-dom";
import { resetQuestions, changeScore } from "../redux/questionSlice";
import Helmet from "../components/Helmet";

const Review = () => {
  const { questions } = useSelector((state) => state.question);
  console.log("questions", questions);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(resetQuestions());
    dispatch(changeScore(0));
    navigate("/");
  };

  const handlePlayAgain = () => {
    dispatch(resetQuestions());
    dispatch(changeScore(0));
    navigate("/questions");
  };

  return (
    <div className="my-10 mx-2">
      <Helmet title={"Review"} />
      <div>
        <h4 className="text-white text-2xl font-bold  text-center">
          Review Your Answer
        </h4>
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="mt-5 bg-white px-6 py-2 rounded-sm">
            <div className="flex items-center flex-wrap">
              <p className="text-lg text-black font-normal">{`${
                index + 1
              }. ${decodeHTML(question.question)}`}</p>
            </div>
            <div>
              <p
                className={`${
                  question.answer_select === question.correct_answer
                    ? "text-[#5EFE59] text-base"
                    : "text-[#FF3A38] text-base"
                } font-medium`}
              >{`Your answer: ${decodeHTML(question.answer_select)}`}</p>
            </div>
            <div>
              <p className="text-[#0900FF] text-base">{`Correct answer: ${decodeHTML(
                question.correct_answer
              )}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 ">
        <button className="button mr-6" onClick={handlePlayAgain}>
          Play Again
        </button>
        <button className="button" onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Review;
