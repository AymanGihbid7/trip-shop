import { Module } from "@nestjs/common";
import { AccueilModuleBase } from "./base/accueil.module.base";
import { AccueilService } from "./accueil.service";
import { AccueilController } from "./accueil.controller";
import { AccueilResolver } from "./accueil.resolver";

@Module({
  imports: [AccueilModuleBase],
  controllers: [AccueilController],
  providers: [AccueilService, AccueilResolver],
  exports: [AccueilService],
})
export class AccueilModule {}
