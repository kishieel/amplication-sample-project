import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type StopCreateInput = {
  latitude?: number | null;
  locationName?: string | null;
  longitude?: number | null;
  route?: RouteWhereUniqueInput | null;
};
