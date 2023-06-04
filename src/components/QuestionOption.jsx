import React from "react";
import { decodeHTML } from "../heplers/decodeHTML";

const QuestionOption = ({
  question,
  options,
  questionSelected,
  setQuestionSelected,
  setMessageWarning,
}) => {
  // const [questionSelected, setQuestionSelected] = useState(undefined);
  const handleSelectOption = (option) => {
    if (!questionSelected) {
      setQuestionSelected(option);
    } else {
      setMessageWarning("You cannot change the answer!!");
    }
  };

  return (
    <ul>
      {options.map((option, index) => (
        <li key={index} onClick={() => handleSelectOption(option)}>
          <div
            className={`w-full rounded-lg border-[1px] border-black mb-4 px-5 py-2 md:px-8 md:py-3 text-black 
            cursor-pointer 
            hover:-translate-y-1
            transition-all duration-500
            ${
              option === questionSelected &&
              questionSelected === question.correct_answer
                ? "bg-[#5EFE59] text-white border-[#5EFE59]"
                : ""
            }
            ${
              questionSelected !== question.correct_answer &&
              questionSelected === option
                ? "bg-[#FF3A38] text-white border-[#FF3A38]"
                : ""
            }
            ${
              questionSelected &&
              questionSelected !== question.correct_answer &&
              question.correct_answer === option
                ? "bg-[#5EFE59] text-white border-[#5EFE59]"
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
