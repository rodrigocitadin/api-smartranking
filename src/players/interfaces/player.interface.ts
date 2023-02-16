import { Document } from 'mongoose';

export interface Player extends Document {
  readonly id: string;
  phoneNumber: string;
  email: string;
  name: string;
  ranking: number;
  rankingPosition: number;
  URLPlayerPhoto: string;
}
