import { Boutique as TBoutique } from "../api/boutique/Boutique";

export const BOUTIQUE_TITLE_FIELD = "id";

export const BoutiqueTitle = (record: TBoutique): string => {
  return record.id?.toString() || String(record.id);
};
