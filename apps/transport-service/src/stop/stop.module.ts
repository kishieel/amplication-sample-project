import { Module } from "@nestjs/common";
import { StopModuleBase } from "./base/stop.module.base";
import { StopService } from "./stop.service";
import { StopResolver } from "./stop.resolver";

@Module({
  imports: [StopModuleBase],
  providers: [StopService, StopResolver],
  exports: [StopService],
})
export class StopModule {}
