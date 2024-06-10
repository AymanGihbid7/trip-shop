import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VoyagesService } from "./voyages.service";
import { VoyagesControllerBase } from "./base/voyages.controller.base";

@swagger.ApiTags("voyages")
@common.Controller("voyages")
export class VoyagesController extends VoyagesControllerBase {
  constructor(protected readonly service: VoyagesService) {
    super(service);
  }
}
