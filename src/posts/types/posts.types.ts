export interface IPostList {
  data: IPost[];
}

export interface IPost {
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
