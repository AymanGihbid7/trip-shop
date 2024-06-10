import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EspaceClientServiceBase } from "./base/espaceClient.service.base";

@Injectable()
export class EspaceClientService extends EspaceClientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
