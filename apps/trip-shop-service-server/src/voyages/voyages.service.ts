import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoyagesServiceBase } from "./base/voyages.service.base";

@Injectable()
export class VoyagesService extends VoyagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
