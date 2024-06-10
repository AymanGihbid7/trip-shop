import { Module } from "@nestjs/common";
import { ServicesComplementairesModuleBase } from "./base/servicesComplementaires.module.base";
import { ServicesComplementairesService } from "./servicesComplementaires.service";
import { ServicesComplementairesController } from "./servicesComplementaires.controller";
import { ServicesComplementairesResolver } from "./servicesComplementaires.resolver";

@Module({
  imports: [ServicesComplementairesModuleBase],
  controllers: [ServicesComplementairesController],
  providers: [ServicesComplementairesService, ServicesComplementairesResolver],
  exports: [ServicesComplementairesService],
})
export class ServicesComplementairesModule {}
