import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccueilService } from "./accueil.service";
import { AccueilControllerBase } from "./base/accueil.controller.base";

@swagger.ApiTags("accueils")
@common.Controller("accueils")
export class AccueilController extends AccueilControllerBase {
  constructor(protected readonly service: AccueilService) {
    super(service);
  }
}
