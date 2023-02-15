import { Injectable } from '@nestjs/common';
import { Player } from './interfaces/player.interface';
import { PlayerDto } from './dtos/player.dto';
import { randomUUID as uuid } from 'node:crypto';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  create(createPlayer: PlayerDto): Player {
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

  update(player_id: string, updatePlayer: PlayerDto) {
    const player = this.get(player_id);
    const { phoneNumber, email, name } = updatePlayer;

    if (player) {
      player.name = name;
      player.email = email;
      player.phoneNumber = phoneNumber;

      this.players.concat(player);
    }
  }

  showAll(): Player[] {
    return this.players;
  }

  get(id: string): Player {
    return this.players.find((player) => player.id === id);
  }
}
