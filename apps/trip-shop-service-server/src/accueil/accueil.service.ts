import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccueilServiceBase } from "./base/accueil.service.base";

@Injectable()
export class AccueilService extends AccueilServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
