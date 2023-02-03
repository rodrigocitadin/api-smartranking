import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/createPlayer.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createPlayer(@Body() createPlayer: CreatePlayerDto) {
    return JSON.stringify(createPlayer);
  }
}
