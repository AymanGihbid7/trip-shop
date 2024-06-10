import { Module } from "@nestjs/common";
import { EspaceClientModuleBase } from "./base/espaceClient.module.base";
import { EspaceClientService } from "./espaceClient.service";
import { EspaceClientController } from "./espaceClient.controller";
import { EspaceClientResolver } from "./espaceClient.resolver";

@Module({
  imports: [EspaceClientModuleBase],
  controllers: [EspaceClientController],
  providers: [EspaceClientService, EspaceClientResolver],
  exports: [EspaceClientService],
})
export class EspaceClientModule {}
