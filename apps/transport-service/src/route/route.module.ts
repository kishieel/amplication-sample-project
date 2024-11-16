import { Module } from "@nestjs/common";
import { RouteModuleBase } from "./base/route.module.base";
import { RouteService } from "./route.service";
import { RouteResolver } from "./route.resolver";

@Module({
  imports: [RouteModuleBase],
  providers: [RouteService, RouteResolver],
  exports: [RouteService],
})
export class RouteModule {}
