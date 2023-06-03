import React, { useState } from "react";
import { decodeHTML } from "../heplers/decodeHTML";

const QuestionOption = ({
  question,
  options,
  questionSelected,
  setQuestionSelected,
}) => {
  // const [questionSelected, setQuestionSelected] = useState(undefined);

  return (
    <ul>
      {options.map((option, index) => (
        <li key={index} onClick={() => setQuestionSelected(option)}>
          <div
            className={`w-full rounded-lg border-[1px] border-white mb-4 px-8 py-3 text-white cursor-pointer 
            hover:-translate-y-1
            transition-all duration-500
            ${
              option === questionSelected &&
              questionSelected === question.correct_answer
                ? "bg-[#5EFE59] text-white"
                : ""
            }
            ${
              questionSelected !== question.correct_answer &&
              questionSelected === option
                ? "bg-[#FF3A38] text-white"
                : ""
            }
            ${
              questionSelected &&
              questionSelected !== question.correct_answer &&
              question.correct_answer === option
                ? "bg-[#5EFE59] text-white"
                : ""
            }
            `}
          >
            {decodeHTML(option)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default QuestionOption;
