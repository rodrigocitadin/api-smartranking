import { Injectable } from '@nestjs/common';
import { Player } from './interfaces/player.interface';
import { CreatePlayerDto } from './dtos/createPlayer.dto';
import { randomUUID as uuid } from 'node:crypto';

@Injectable()
export class PlayersService {
  private readonly players: Player[] = [];

  create(createPlayer: CreatePlayerDto): Player {
    const { name, email, phoneNumber } = createPlayer;

    const player = {
      id: uuid(),
      phoneNumber,
      email,
      name,
      ranking: 0,
      rankingPosition: 0,
      URLPlayerPhoto: '',
    };

    this.players.push(player);

    return player;
  }
}
