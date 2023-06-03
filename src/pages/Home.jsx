import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/imgs/logo.png";
import { startCountTime } from "../redux/questionSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div className="flex justify-center">
        <img src={logoImg} alt="" className="w-36 h-auto" />
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="px-12 py-4 rounded-lg bg-white text-black text-base font-semibold"
          onClick={() => {
            dispatch(startCountTime());
          }}
        >
          <Link to="/questions">Start Quiz!</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
