import { apiUrl } from "@/constants/urls";
import { anonAxiosApi } from "@/src/api/apiClient";
import { createAsyncThunkWithErrorHandling } from "@/src/middlewares";
import { ICreateAccountInput, ILoginInput } from "../types/onBoarding";

export const login = createAsyncThunkWithErrorHandling(
  "onBoarding/login",
  async ({
    inputParams: { phoneNumber, password },
  }: IActionInputType<ILoginInput>) => {
    const params = new URLSearchParams();
    params.append("phoneNumber", phoneNumber);
    params.append("password", password);

    const { data } = await anonAxiosApi.post(`${apiUrl}/users/login`, params);

    return data;
  }
);

export const createAccount = createAsyncThunkWithErrorHandling(
  "onBoarding/createAccount",
  async ({
    inputParams: { email, nickName, phoneNumber, password },
  }: IActionInputType<ICreateAccountInput>) => {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("nickName", nickName);
    params.append("phoneNumber", phoneNumber);
    params.append("password", password);

    const { data } = await anonAxiosApi.post(`${apiUrl}/users/sign-up`, params);

    console.log("welkfjwlkfjwlkef " + JSON.stringify(data));

    return data;
  }
);
