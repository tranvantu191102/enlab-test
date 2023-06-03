import React from "react";
import { useSelector } from "react-redux";
import { decodeHTML } from "../heplers/decodeHTML";

const Review = () => {
  const { questions } = useSelector((state) => state.question);
  console.log("questions", questions);

  return (
    <div className="my-10">
      <div>
        <h4 className="text-white text-2xl font-bold  text-center">
          Review Your Answer
        </h4>
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="mt-5">
            <div className="flex items-center flex-wrap">
              <p className="text-lg text-white font-normal">{`${
                index + 1
              }. ${decodeHTML(question.question)}`}</p>
            </div>
            <div>
              <p
                className={`${
                  question.answer_select === question.correct_answer
                    ? "text-[#BDFE4A] text-base"
                    : "text-[#FF3A38] text-base"
                }`}
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
      <button className="button mt-5">Exit</button>
    </div>
  );
};

export default Review;
