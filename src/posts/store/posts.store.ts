import { createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../types/posts";
import { AsyncActionStatus } from "@/src/shared/types/enums.types";
import { getPostsByType } from "../services/post.actions";
import { getUpdatedPosts } from "../helpers/getUpdatedPost";

const initialState: IPosts = {
  postsLists: {
    requesting: undefined,
    helping: undefined,
  },
  postsListStatus: AsyncActionStatus.idle,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsByType.pending, (state, action) => {
        if (action.meta.arg.shouldStoreOutputState) {
          state.postsListStatus = AsyncActionStatus.loading;
        }
      })
      .addCase(getPostsByType.fulfilled, (state, action) => {
        //console.log("paaaylloodd " + JSON.stringify(action.payload));

        if (action.meta.arg.shouldStoreOutputState) {
          const updated = getUpdatedPosts(
            state.postsLists[action.meta.arg.inputParams.type],
            action.payload
          );
          state.postsListStatus = AsyncActionStatus.done;
          state.postsLists[action.meta.arg.inputParams.type] = updated;
        }
      })
      .addCase(getPostsByType.rejected, (state, action) => {
        if (action.meta.arg.shouldStoreOutputState) {
          state.postsListStatus = AsyncActionStatus.error;
        }
      });
  },
});

export const {} = postsSlice.actions;

const postsReducer = postsSlice.reducer;
export default postsReducer;
