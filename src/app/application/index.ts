import { Provider } from '@nestjs/common';

import { UserAdapter } from '../adapters/out/adapters/user.adapter';
import { UserPort } from '../ports/in/user';

import { UserApplication } from './user.application';

type ApplicationClassType = UserApplication;

interface Type<T> extends Function {
  new (...args: any[]): T;
}

const InjectBuilderAdapters = [UserAdapter];

const useFactoryBuilder =
  (ApplicationClass: Type<ApplicationClassType>) =>
  (userAdapter: UserAdapter) => {
    return new ApplicationClass({
      userAdapter,
    });
  };

const ApplicationConfig: Provider[] = [
  {
    provide: UserPort,
    inject: [...InjectBuilderAdapters],
    useFactory: useFactoryBuilder(UserApplication),
  },
];

export { ApplicationConfig };
