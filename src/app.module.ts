import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ debug: true });

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }),
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
