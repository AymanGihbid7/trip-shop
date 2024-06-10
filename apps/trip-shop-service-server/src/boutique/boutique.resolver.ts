import * as graphql from "@nestjs/graphql";
import { BoutiqueResolverBase } from "./base/boutique.resolver.base";
import { Boutique } from "./base/Boutique";
import { BoutiqueService } from "./boutique.service";

@graphql.Resolver(() => Boutique)
export class BoutiqueResolver extends BoutiqueResolverBase {
  constructor(protected readonly service: BoutiqueService) {
    super(service);
  }
}
