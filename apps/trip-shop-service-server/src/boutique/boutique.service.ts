import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoutiqueServiceBase } from "./base/boutique.service.base";

@Injectable()
export class BoutiqueService extends BoutiqueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
