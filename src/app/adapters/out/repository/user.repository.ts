import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DATABASES_CONNECTION } from 'src/shared/database/database.model';
import { UserPort } from 'src/app/ports/out/user';
import { User } from 'src/app/domain';

import { UserEntityPostgres } from '../model/user.entity.postgres';
import { UserEntityMySQL } from '../model/user.entity.mysql';

@Injectable()
class UserRepository implements UserPort {
  constructor(
    @InjectRepository(
      UserEntityPostgres,
      DATABASES_CONNECTION.POSTGRESQL_CONNECTION,
    )
    private readonly userRepositoryPostgres: Repository<any>,
    @InjectRepository(
      UserEntityMySQL,
      DATABASES_CONNECTION.POSTGRESQL_CONNECTION,
    )
    private readonly userRepositoryMySQL: Repository<any>,
  ) {}

  async findOne(): Promise<User> {
    const userPostgres = await this.userRepositoryPostgres.findOne({
      where: { id: 1 },
    });

    return userPostgres;
  }
}

export { UserRepository };
