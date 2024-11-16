import { SortOrder } from "../../util/SortOrder";

export type StopOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  locationName?: SortOrder;
  longitude?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
};
