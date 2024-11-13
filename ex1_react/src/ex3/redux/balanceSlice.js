import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: 1000 },
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload; //& action.payload: Used to pass the deposit or withdrawal amount to the reducers.
    },
    removeMoney: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addMoney, removeMoney } = balanceSlice.actions;
export default balanceSlice.reducer;
