import { Provider } from '@nestjs/common';

import { UserPort } from 'src/app/ports/out/user';
import { UserAdapter } from './user.adapter';

type AdapterType = UserAdapter;

interface Type<T> extends Function {
  new (...args: any[]): T;
}

const useFactoryBuilder =
  (AdapterClass: Type<AdapterType>) => (userPort: UserPort) => {
    return new AdapterClass({
      userPort,
    });
  };

const InjectBuilderAdapters = [UserPort];

const AdapterConfig: Provider[] = [
  {
    provide: UserAdapter,
    inject: [...InjectBuilderAdapters],
    useFactory: useFactoryBuilder(UserAdapter),
  },
];

export { AdapterConfig };
