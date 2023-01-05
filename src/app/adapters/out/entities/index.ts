import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DATABASES_CONNECTION } from 'src/shared/database/database.model';
import { UserEntityMySQL } from './user.entity.mysql';
import { UserEntityPostgres } from './user.entity.postgres';

const EntitiesConfig: DynamicModule[] = [
  TypeOrmModule.forFeature(
    [UserEntityMySQL],
    DATABASES_CONNECTION.MYSQL_CONNECTION,
  ),
  TypeOrmModule.forFeature(
    [UserEntityPostgres],
    DATABASES_CONNECTION.POSTGRESQL_CONNECTION,
  ),
];

export { EntitiesConfig };
