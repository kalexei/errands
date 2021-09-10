import { createContext } from "react";
import { IUserInfoContext } from "./types";

export const UserInfoContext = createContext<Partial<IUserInfoContext>>({
  username: null,
  photo: null,
  setUsername: null,
  setPhoto: null,
});
