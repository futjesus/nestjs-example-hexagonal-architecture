import { Module } from '@nestjs/common';

import { ApplicationModule } from './app/app.module';
import { DatabaseModule } from './shared/database';

@Module({
  imports: [DatabaseModule, ApplicationModule],
})
export class AppModule {}
