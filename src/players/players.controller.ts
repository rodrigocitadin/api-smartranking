import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  HttpCode,
  Param,
} from '@nestjs/common';
import { PlayerDto } from './dtos/player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @HttpCode(201)
  createPlayer(@Body() playerData: PlayerDto) {
    const player = this.playersService.create(playerData);

    return JSON.stringify(player);
  }

  @Put(':id')
  @HttpCode(204)
  updatePlayer(@Param() params, @Body() newPlayerData: PlayerDto) {
    this.playersService.update(params.id, newPlayerData);
  }

  @Get()
  showPlayers(): Player[] {
    return this.playersService.showAll();
  }
}
