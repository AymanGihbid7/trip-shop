import { Module } from "@nestjs/common";
import { VoyagesModuleBase } from "./base/voyages.module.base";
import { VoyagesService } from "./voyages.service";
import { VoyagesController } from "./voyages.controller";
import { VoyagesResolver } from "./voyages.resolver";

@Module({
  imports: [VoyagesModuleBase],
  controllers: [VoyagesController],
  providers: [VoyagesService, VoyagesResolver],
  exports: [VoyagesService],
})
export class VoyagesModule {}
