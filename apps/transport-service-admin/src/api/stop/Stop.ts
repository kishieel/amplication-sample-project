import { Route } from "../route/Route";

export type Stop = {
  createdAt: Date;
  id: string;
  latitude: number | null;
  locationName: string | null;
  longitude: number | null;
  route?: Route | null;
  updatedAt: Date;
};
