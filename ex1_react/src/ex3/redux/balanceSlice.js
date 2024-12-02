import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
  name: "balance",
  initialState: { balance: 1000 },
  reducers: {
    addMoney: (state, action) => {
      if (!isNaN(action.payload) && action.payload > 0) {
        state.balance += action.payload; //& money i want to deposit
      } else {
        alert("Please enter a valid number.");
      }
    },
    removeMoney: (state, action) => {
      if (
        !isNaN(action.payload) &&
        action.payload > 0 &&
        action.payload <= state.balance
      ) {
        state.balance -= action.payload;
      } else {
        alert("Please enter a valid number.");
      }
    },
  },
});

export const { addMoney, removeMoney } = balanceSlice.actions;
export default balanceSlice.reducer;
