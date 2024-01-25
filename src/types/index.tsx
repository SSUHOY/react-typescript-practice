export interface IPostsData {
  index: number;
  id: number | null;
  userId: number;
  title: string;
  body: string;
  post: string[];
}

export interface IItemData {
  title: string;
  body: string;
}
