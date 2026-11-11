import { Module } from "@nestjs/common";

import type { AppEnv } from "../../config/env.js";
import { JobModule } from "../../infrastructure/jobs/job.module.js";
import { APP_ENV } from "../../config/tokens.js";
import { FakeGithubAppClient } from "./fake-github.client.js";
import { GithubController } from "./github.controller.js";
import { GithubService } from "./github.service.js";

@Module({
  imports: [JobModule],
  controllers: [GithubController],
  providers: [
    GithubService,
    {
      provide: "GithubAppClient",
      useFactory: (env: AppEnv) => new FakeGithubAppClient(env), //nest passes APP_ENV as arg to factory cb
      inject: [APP_ENV],    //nest get dependency APP_ENV
    },
  ],
  exports: [GithubService],
})
export class GithubModule {}
