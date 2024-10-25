export interface IPostForm {
  date: string;
  title: string;
  description: string;
}

export interface IPost {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface IPostApi {
  [id: string]: IPost;
}