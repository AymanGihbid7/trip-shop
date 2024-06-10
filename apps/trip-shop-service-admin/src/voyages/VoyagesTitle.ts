import { Voyages as TVoyages } from "../api/voyages/Voyages";

export const VOYAGES_TITLE_FIELD = "id";

export const VoyagesTitle = (record: TVoyages): string => {
  return record.id?.toString() || String(record.id);
};
