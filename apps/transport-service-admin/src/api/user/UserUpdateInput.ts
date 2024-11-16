import { InputJsonValue } from "../../types";
import { RouteUpdateManyWithoutUsersInput } from "./RouteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  routes?: RouteUpdateManyWithoutUsersInput;
  username?: string;
};
