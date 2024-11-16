import { StopCreateNestedManyWithoutRoutesInput } from "./StopCreateNestedManyWithoutRoutesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RouteCreateInput = {
  distance?: number | null;
  endLocation?: string | null;
  estimatedTravelTime?: number | null;
  routeName?: string | null;
  startLocation?: string | null;
  stops?: StopCreateNestedManyWithoutRoutesInput;
  user?: UserWhereUniqueInput | null;
};
