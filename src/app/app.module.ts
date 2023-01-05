import { Module } from '@nestjs/common';

import { ControllersConfig } from './adapters/in';

import {
  AdapterConfig,
  RepositoryConfig,
  EntitiesConfig,
} from './adapters/out';

import { ApplicationConfig } from './application';

@Module({
  imports: [...EntitiesConfig],
  controllers: [...ControllersConfig],
  providers: [...AdapterConfig, ...RepositoryConfig, ...ApplicationConfig],
})
class ApplicationModule {}

export { ApplicationModule };
