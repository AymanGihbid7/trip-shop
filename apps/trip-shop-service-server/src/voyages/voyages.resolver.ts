import * as graphql from "@nestjs/graphql";
import { VoyagesResolverBase } from "./base/voyages.resolver.base";
import { Voyages } from "./base/Voyages";
import { VoyagesService } from "./voyages.service";

@graphql.Resolver(() => Voyages)
export class VoyagesResolver extends VoyagesResolverBase {
  constructor(protected readonly service: VoyagesService) {
    super(service);
  }
}
