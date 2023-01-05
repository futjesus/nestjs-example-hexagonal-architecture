import { Global, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DATABASES_CONNECTION } from './database.model';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [],
      name: DATABASES_CONNECTION.POSTGRESQL_CONNECTION,
      useFactory: (): TypeOrmModuleOptions => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'database',
          password: 'database',
          database: 'database',
          entities: ['**/*.entity.postgres.js'],
          logging: true,
        };
      },
    }),
    TypeOrmModule.forRootAsync({
      inject: [],
      name: DATABASES_CONNECTION.MYSQL_CONNECTION,
      useFactory: (): TypeOrmModuleOptions => {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'database',
          database: 'database',
          entities: ['**/*.entity.mysql.js'],
          logging: true,
        };
      },
    }),
  ],
})
class DatabaseModule {}

export { DatabaseModule };
