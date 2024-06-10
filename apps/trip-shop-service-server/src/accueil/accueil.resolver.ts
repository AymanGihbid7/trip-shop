import * as graphql from "@nestjs/graphql";
import { AccueilResolverBase } from "./base/accueil.resolver.base";
import { Accueil } from "./base/Accueil";
import { AccueilService } from "./accueil.service";

@graphql.Resolver(() => Accueil)
export class AccueilResolver extends AccueilResolverBase {
  constructor(protected readonly service: AccueilService) {
    super(service);
  }
}
