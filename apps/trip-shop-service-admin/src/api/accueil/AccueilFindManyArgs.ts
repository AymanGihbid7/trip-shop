import { AccueilWhereInput } from "./AccueilWhereInput";
import { AccueilOrderByInput } from "./AccueilOrderByInput";

export type AccueilFindManyArgs = {
  where?: AccueilWhereInput;
  orderBy?: Array<AccueilOrderByInput>;
  skip?: number;
  take?: number;
};
