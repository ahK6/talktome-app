import { AsyncActionStatus } from "@/src/shared/types/enums.types";
import { PostTypes } from "./enum.types";

interface IPostsTypes {
  requesting: IPost[] | undefined;
  helping: IPost[] | undefined;
}

interface IPosts {
  postsLists: IPostsTypes;
  postsListStatus: AsyncActionStatus;
}

interface IPost {
  _id: string;
  title: string;
  content: string;
  keywords: string[];
  status: string;
  idUserCreator: string;
  createdAt: Date;
  updatedAt: Date;
  comments?: any[];
  id: string;
  type?: string;
}

interface IPostParams {
  page: number;
  pageSize: number;
  type: PostTypes;
}
