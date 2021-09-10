export type IScreenParamList = {
  Home: undefined;
  Settings: undefined;
  Start: undefined;
  Login: undefined;
};

export type IUserInfoContext = {
  username: string | null;
  photo: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>> | null;
  setPhoto: React.Dispatch<React.SetStateAction<string | null>> | null;
};
