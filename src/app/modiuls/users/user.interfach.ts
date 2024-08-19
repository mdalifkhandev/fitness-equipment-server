export type TUsers = {
  firstName: string;
  lestName: string;
  email: string;
  password: string;
  role: "user" | "seller";
  isDeleted: boolean;
};
