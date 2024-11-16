import { StopUpdateManyWithoutRoutesInput } from "./StopUpdateManyWithoutRoutesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RouteUpdateInput = {
  distance?: number | null;
  endLocation?: string | null;
  estimatedTravelTime?: number | null;
  routeName?: string | null;
  startLocation?: string | null;
  stops?: StopUpdateManyWithoutRoutesInput;
  user?: UserWhereUniqueInput | null;
};
