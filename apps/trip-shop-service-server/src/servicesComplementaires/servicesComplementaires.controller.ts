import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServicesComplementairesService } from "./servicesComplementaires.service";
import { ServicesComplementairesControllerBase } from "./base/servicesComplementaires.controller.base";

@swagger.ApiTags("servicesComplementaires")
@common.Controller("servicesComplementaires")
export class ServicesComplementairesController extends ServicesComplementairesControllerBase {
  constructor(protected readonly service: ServicesComplementairesService) {
    super(service);
  }
}
