import { EspaceClient as TEspaceClient } from "../api/espaceClient/EspaceClient";

export const ESPACECLIENT_TITLE_FIELD = "id";

export const EspaceClientTitle = (record: TEspaceClient): string => {
  return record.id?.toString() || String(record.id);
};
