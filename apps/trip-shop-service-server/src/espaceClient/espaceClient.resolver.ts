import * as graphql from "@nestjs/graphql";
import { EspaceClientResolverBase } from "./base/espaceClient.resolver.base";
import { EspaceClient } from "./base/EspaceClient";
import { EspaceClientService } from "./espaceClient.service";

@graphql.Resolver(() => EspaceClient)
export class EspaceClientResolver extends EspaceClientResolverBase {
  constructor(protected readonly service: EspaceClientService) {
    super(service);
  }
}
