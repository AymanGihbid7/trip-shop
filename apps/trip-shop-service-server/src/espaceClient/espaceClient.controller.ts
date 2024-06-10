import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EspaceClientService } from "./espaceClient.service";
import { EspaceClientControllerBase } from "./base/espaceClient.controller.base";

@swagger.ApiTags("espaceClients")
@common.Controller("espaceClients")
export class EspaceClientController extends EspaceClientControllerBase {
  constructor(protected readonly service: EspaceClientService) {
    super(service);
  }
}
