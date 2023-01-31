import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Get()
  async helloWorld() {
    return JSON.stringify({
      hello: 'world',
    });
  }
}
