import { User } from 'src/app/domain';
import { UserPort } from 'src/app/ports/out/user';

class UserAdapter {
  private readonly userPort: UserPort;

  constructor({ userPort }) {
    this.userPort = userPort;
  }

  async find(): Promise<User> {
    return this.userPort.findOne();
  }
}

export { UserAdapter };
