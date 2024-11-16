import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StopListRelationFilter } from "../stop/StopListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RouteWhereInput = {
  distance?: FloatNullableFilter;
  endLocation?: StringNullableFilter;
  estimatedTravelTime?: IntNullableFilter;
  id?: StringFilter;
  routeName?: StringNullableFilter;
  startLocation?: StringNullableFilter;
  stops?: StopListRelationFilter;
  user?: UserWhereUniqueInput;
};
