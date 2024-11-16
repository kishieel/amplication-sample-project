import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type StopWhereInput = {
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  locationName?: StringNullableFilter;
  longitude?: FloatNullableFilter;
  route?: RouteWhereUniqueInput;
};
