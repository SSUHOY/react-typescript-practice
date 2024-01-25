export interface PostsData {
  index: number;
  id: number | null;
  userId: number;
  title: string;
  body: string;
  post: string[];
}

export interface ItemData {
  title: string;
  body: string;
}
