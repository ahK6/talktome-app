import { apiUrl } from "@/constants/urls";
import { anonAxiosApi } from "@/src/api/apiClient";
import { createAsyncThunkWithErrorHandling } from "@/src/middlewares";
import { ILoginInput } from "../types/onBoarding";

export const login = createAsyncThunkWithErrorHandling(
  "onBoarding/login",
  async ({
    inputParams: { phoneNumber, password },
  }: IActionInputType<ILoginInput>) => {
    const params = new URLSearchParams();
    params.append("phoneNumber", phoneNumber);
    params.append("password", password);

    const { data } = await anonAxiosApi.post(`${apiUrl}/users/login`, params);

    return data.data;
  }
);
