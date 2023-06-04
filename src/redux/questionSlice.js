import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    amountOfQuestions: 10,
    score: 0,
    questions: [],
    timeStart: 0,
    timeEnd: 0,
  },
  reducers: {
    changeScore: (state, action) => {
      return {
        ...state,
        score: action.payload,
      };
    },
    addQuestionSelected: (state, action) => {
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    },
    resetQuestions: (state) => {
      return {
        ...state,
        questions: [],
      };
    },
    startCountTime: (state) => {
      return {
        ...state,
        timeStart: new Date().getTime(),
      };
    },
    endCountTime: (state) => {
      return {
        ...state,
        timeEnd: new Date().getTime(),
      };
    },
  },
});

export const {
  changeScore,
  addQuestionSelected,
  startCountTime,
  endCountTime,
  resetQuestions,
} = questionSlice.actions;
export default questionSlice.reducer;
