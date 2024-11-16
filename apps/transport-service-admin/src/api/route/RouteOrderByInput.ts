import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  endLocation?: SortOrder;
  estimatedTravelTime?: SortOrder;
  id?: SortOrder;
  routeName?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
