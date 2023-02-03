import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/createPlayer.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  createPlayer(@Body() playerData: CreatePlayerDto) {
    const player = this.playersService.create(playerData);

    return JSON.stringify(player);
  }
}
