import * as graphql from "@nestjs/graphql";
import { ServicesComplementairesResolverBase } from "./base/servicesComplementaires.resolver.base";
import { ServicesComplementaires } from "./base/ServicesComplementaires";
import { ServicesComplementairesService } from "./servicesComplementaires.service";

@graphql.Resolver(() => ServicesComplementaires)
export class ServicesComplementairesResolver extends ServicesComplementairesResolverBase {
  constructor(protected readonly service: ServicesComplementairesService) {
    super(service);
  }
}
