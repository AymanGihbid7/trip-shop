import { ServicesComplementairesWhereInput } from "./ServicesComplementairesWhereInput";
import { ServicesComplementairesOrderByInput } from "./ServicesComplementairesOrderByInput";

export type ServicesComplementairesFindManyArgs = {
  where?: ServicesComplementairesWhereInput;
  orderBy?: Array<ServicesComplementairesOrderByInput>;
  skip?: number;
  take?: number;
};
