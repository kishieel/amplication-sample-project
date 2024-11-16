import { InputJsonValue } from "../../types";
import { RouteCreateNestedManyWithoutUsersInput } from "./RouteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  routes?: RouteCreateNestedManyWithoutUsersInput;
  username: string;
};
