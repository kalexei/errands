import { RouteProp } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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

export type INavigationProps<T extends keyof IScreenParamList> = {
  navigation: NativeStackNavigationProp<IScreenParamList, T>;
  route: RouteProp<IScreenParamList, T>;
};
