import React from "react";
import congratImg from "../assets/imgs/congratulation.png";
import completedImg from "../assets/imgs/sync.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { formatTime } from "../heplers/formatTime";
import { resetQuestions, changeScore } from "../redux/questionSlice";
import Helmet from "../components/Helmet";

const Summary = () => {
  const { score, amountOfQuestions, timeStart, timeEnd } = useSelector(
    (state) => state.question
  );
  const isPassed = score > amountOfQuestions / 2;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    dispatch(resetQuestions());
    dispatch(changeScore(0));
    navigate("/questions");
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen mx-2">
      <Helmet title={"Summary"} />
      <div className="flex flex-col items-center bg-white p-5 md:p-8 rounded-lg">
        <div>
          <img
            src={isPassed ? congratImg : completedImg}
            alt=""
            className="w-32"
          />
        </div>
        <p className="text-black text-3xl font-bold mt-3">
          {isPassed ? "Congratulations!" : "Completed!"}
        </p>
        <p className="text-black mt-1 text-lg text-center">
          {" "}
          {isPassed ? "You are amazing!" : "You are failed the quiz!"}
        </p>
        <p className="text-black text-center mt-1 text-lg">{`${score}/${amountOfQuestions} correct answer in ${formatTime(
          timeStart,
          timeEnd
        )}`}</p>
        <div className="flex flex-col md:flex-row mt-5 ">
          <button
            className="button mr-2 mb-4 md:mb-0"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
          <button className="button">
            <Link to="/review">Review Your Answer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
