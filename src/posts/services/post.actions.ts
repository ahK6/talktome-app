import { anonAxiosApi } from "@/src/api/apiClient";
import { createAsyncThunkWithErrorHandling } from "@/src/middlewares";
import { IPostParams } from "../types/posts";
import { PostTypes } from "../types/enum.types";
import { apiUrl } from "@/constants/urls";

export const getPostsByType = createAsyncThunkWithErrorHandling(
  "posts/getPostsByType",
  async ({
    inputParams: { page = 1, pageSize = 10, type = PostTypes.requesting },
    shouldStoreOutputState = false,
  }: IActionInputType<IPostParams>) => {
    const { data } = await anonAxiosApi.get(
      `${apiUrl}/posts/get-all?page=${page}&pageSize=${pageSize}&type=${type}`
    );

    return data.data;
  }
);
