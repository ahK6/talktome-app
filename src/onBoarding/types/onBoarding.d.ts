import { AsyncActionStatus } from "@/src/shared/types/enums.types";

interface IOnBoarding {
  loginInfo: ILoginOutput | undefined;
  loginStatus: AsyncActionStatus;
}

interface ILoginOutput {
  userInformation: UserInformation;
  token: string;
}

interface UserInformation {
  id: string;
  phoneNumber: string;
  username: string;
}

interface ILoginInput {
  phoneNumber: string;
  password: string;
}

interface ICreateAccountInput {
  email: string;
  nickName: string;
  phoneNumber: string;
  password: string;
}
