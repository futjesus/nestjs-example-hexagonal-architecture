import { User } from 'src/app/domain';

export abstract class UserPort {
  abstract get(): Promise<User>;
}
