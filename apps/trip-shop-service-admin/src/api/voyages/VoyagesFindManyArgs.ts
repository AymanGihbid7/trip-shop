import { VoyagesWhereInput } from "./VoyagesWhereInput";
import { VoyagesOrderByInput } from "./VoyagesOrderByInput";

export type VoyagesFindManyArgs = {
  where?: VoyagesWhereInput;
  orderBy?: Array<VoyagesOrderByInput>;
  skip?: number;
  take?: number;
};
