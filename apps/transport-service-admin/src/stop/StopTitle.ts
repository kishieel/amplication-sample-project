import { Stop as TStop } from "../api/stop/Stop";

export const STOP_TITLE_FIELD = "locationName";

export const StopTitle = (record: TStop): string => {
  return record.locationName?.toString() || String(record.id);
};
