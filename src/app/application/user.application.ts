import { UserAdapter } from '../adapters/out/adapters/user.adapter';
import { User } from '../domain';
import { UserPort } from '../ports/in/user';

export class UserApplication implements UserPort {
  userAdapter: UserAdapter;

  constructor({ userAdapter }) {
    this.userAdapter = userAdapter;
  }

  async get(): Promise<User> {
    return this.userAdapter.find();
  }
}
