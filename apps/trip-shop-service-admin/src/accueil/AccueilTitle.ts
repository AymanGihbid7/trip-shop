import { Accueil as TAccueil } from "../api/accueil/Accueil";

export const ACCUEIL_TITLE_FIELD = "id";

export const AccueilTitle = (record: TAccueil): string => {
  return record.id?.toString() || String(record.id);
};
