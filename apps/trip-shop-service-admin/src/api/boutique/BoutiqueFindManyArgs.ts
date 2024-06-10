import { BoutiqueWhereInput } from "./BoutiqueWhereInput";
import { BoutiqueOrderByInput } from "./BoutiqueOrderByInput";

export type BoutiqueFindManyArgs = {
  where?: BoutiqueWhereInput;
  orderBy?: Array<BoutiqueOrderByInput>;
  skip?: number;
  take?: number;
};
