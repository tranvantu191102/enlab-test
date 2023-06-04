import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/imgs/logo.png";
import Helmet from "../components/Helmet";

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <Helmet title={"Home"} />
      <div className="flex justify-center">
        <img src={logoImg} alt="" className="w-36 h-auto" />
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/questions">
          <button className="px-12 py-4 rounded-lg bg-white text-black text-base font-semibold">
            Start Quiz!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
