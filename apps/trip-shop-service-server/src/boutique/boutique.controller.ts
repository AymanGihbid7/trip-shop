import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoutiqueService } from "./boutique.service";
import { BoutiqueControllerBase } from "./base/boutique.controller.base";

@swagger.ApiTags("boutiques")
@common.Controller("boutiques")
export class BoutiqueController extends BoutiqueControllerBase {
  constructor(protected readonly service: BoutiqueService) {
    super(service);
  }
}
