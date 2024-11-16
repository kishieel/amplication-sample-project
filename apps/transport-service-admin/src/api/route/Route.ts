import { Stop } from "../stop/Stop";
import { User } from "../user/User";

export type Route = {
  createdAt: Date;
  distance: number | null;
  endLocation: string | null;
  estimatedTravelTime: number | null;
  id: string;
  routeName: string | null;
  startLocation: string | null;
  stops?: Array<Stop>;
  updatedAt: Date;
  user?: User | null;
};
