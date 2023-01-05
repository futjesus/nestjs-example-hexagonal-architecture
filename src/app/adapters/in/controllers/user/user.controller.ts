import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

import { UserPort } from 'src/app/ports/in/user';

@Controller({
  path: 'users',
})
class UserController {
  constructor(private readonly userPort: UserPort) {}

  @Get('/')
  async getAllRoutesByDay() {
    try {
      return await this.userPort.get();
    } catch {
      throw new HttpException(
        'Error al obtener los usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export { UserController };
