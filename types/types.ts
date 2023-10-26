export interface UserAuth {
  // You can replace 'any' with the actual type if needed
  _id?: string;
  Avatar: string;
  username: string;
}

export type FileType = {
  uri?: string;
  type?: string;
  fileName: string;
};
