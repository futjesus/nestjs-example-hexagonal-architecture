import { Provider } from '@nestjs/common';

import { UserPort } from 'src/app/ports/out/user';
import { UserRepository } from './user.repository';

const RepositoryConfig: Provider[] = [
  {
    provide: UserPort,
    useClass: UserRepository,
  },
];

export { RepositoryConfig };
