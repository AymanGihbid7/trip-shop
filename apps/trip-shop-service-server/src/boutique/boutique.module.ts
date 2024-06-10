import { Module } from "@nestjs/common";
import { BoutiqueModuleBase } from "./base/boutique.module.base";
import { BoutiqueService } from "./boutique.service";
import { BoutiqueController } from "./boutique.controller";
import { BoutiqueResolver } from "./boutique.resolver";

@Module({
  imports: [BoutiqueModuleBase],
  controllers: [BoutiqueController],
  providers: [BoutiqueService, BoutiqueResolver],
  exports: [BoutiqueService],
})
export class BoutiqueModule {}
