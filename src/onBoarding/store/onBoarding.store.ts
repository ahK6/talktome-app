import { createSlice } from "@reduxjs/toolkit";
import { AsyncActionStatus } from "@/src/shared/types/enums.types";
import { IOnBoarding } from "../types/onBoarding";
import { login } from "../services/onBoarding.actions";

const initialState: IOnBoarding = {
  loginInfo: undefined,
  loginStatus: AsyncActionStatus.idle,
};

const onBoardingSlice = createSlice({
  name: "onBoarding",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loginStatus = AsyncActionStatus.loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = AsyncActionStatus.done;
        state.loginInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = AsyncActionStatus.error;
      });
  },
});

export const {} = onBoardingSlice.actions;

const onBoardingReducer = onBoardingSlice.reducer;
export default onBoardingReducer;
