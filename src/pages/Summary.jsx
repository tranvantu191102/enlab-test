import React from "react";
import congratImg from "../assets/imgs/congratulation.png";
import completedImg from "../assets/imgs/sync.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatTime } from "../heplers/formatTime";

const Summary = () => {
  const { score, amountOfQuestions, timeStart, timeEnd } = useSelector(
    (state) => state.question
  );
  const isPassed = score > amountOfQuestions / 2;
  console.log(timeStart, timeEnd);
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex flex-col items-center">
        <div>
          <img
            src={isPassed ? congratImg : completedImg}
            alt=""
            className="w-32"
          />
        </div>
        <p className="text-[#0900FF] text-2xl font-semibold mt-3">
          {isPassed ? "Congratulations!" : "Completed!"}
        </p>
        <p className="text-[#0900FF] mt-1 text-lg">
          {" "}
          {isPassed ? "You are amazing!" : "Better luck next time!"}
        </p>
        <p className="text-white mt-1 text-lg">{`${score}/${amountOfQuestions} correct answer in ${formatTime(
          timeStart,
          timeEnd
        )}`}</p>
        <div className="mt-5">
          <button className="button mr-2">Play Again</button>
          <button className="button">
            <Link to="/review">Review Your Answer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
