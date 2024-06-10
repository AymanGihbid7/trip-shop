import { EspaceClientWhereInput } from "./EspaceClientWhereInput";
import { EspaceClientOrderByInput } from "./EspaceClientOrderByInput";

export type EspaceClientFindManyArgs = {
  where?: EspaceClientWhereInput;
  orderBy?: Array<EspaceClientOrderByInput>;
  skip?: number;
  take?: number;
};
