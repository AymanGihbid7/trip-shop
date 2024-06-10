import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServicesComplementairesServiceBase } from "./base/servicesComplementaires.service.base";

@Injectable()
export class ServicesComplementairesService extends ServicesComplementairesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
