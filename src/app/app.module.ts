import { Module } from '@nestjs/common';

import { ControllersConfig } from './adapters/in/controllers';

import { AdapterConfig, RepositoryConfig } from './adapters/out';
import { EntitiesConfig } from './adapters/out/model';
import { ApplicationConfig } from './application';

@Module({
  imports: [...EntitiesConfig],
  controllers: [...ControllersConfig],
  providers: [...AdapterConfig, ...RepositoryConfig, ...ApplicationConfig],
})
class ApplicationModule {}

export { ApplicationModule };
