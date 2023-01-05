import { User } from '../../../domain';

abstract class UserPort {
  abstract findOne(): Promise<User>;
}

export { UserPort };
