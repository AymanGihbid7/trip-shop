import { ServicesComplementaires as TServicesComplementaires } from "../api/servicesComplementaires/ServicesComplementaires";

export const SERVICESCOMPLEMENTAIRES_TITLE_FIELD = "id";

export const ServicesComplementairesTitle = (
  record: TServicesComplementaires
): string => {
  return record.id?.toString() || String(record.id);
};
