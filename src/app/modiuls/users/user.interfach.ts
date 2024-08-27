import { USER_ROLE } from "./user.constant";

export type TUsers = {
  firstName: string;
  lestName: string;
  email: string;
  password: string;
  role: "user" | "seller";
  isDeleted: boolean;
};

export type TUserRole = keyof typeof USER_ROLE;
