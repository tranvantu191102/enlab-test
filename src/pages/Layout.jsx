import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Questions from "./Questions";
import Summary from "./Summary";
import Review from "./Review";

const Layout = () => {
  return (
    <div className="bg-[#88DF86] min-h-screen">
      <div className="w-[500px] h-full m-auto flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
