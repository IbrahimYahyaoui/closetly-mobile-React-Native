export interface UserAuth {
  _id?: string;
  Avatar: string;
  username: string;
}

export type FileType = {
  uri?: string;
  type?: string;
  fileName: string;
};

export type ClothType = {
  Category: string;
  Name: string;
  url: string;
};
