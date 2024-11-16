import { JsonValue } from "type-fest";
import { Route } from "../route/Route";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  routes?: Array<Route>;
  updatedAt: Date;
  username: string;
};
