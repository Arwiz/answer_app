import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { AnswerSchema } from './entity/answer.entity';
import { ConfigService } from '@nestjs/config';
import { Inject } from '@nestjs/common';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (
      configService: ConfigService,
    ): Promise<typeof mongoose> => {
      const DBURI = configService.get('DBURI');
      console.log('config....', configService.get('DBURI'));
      const result = await mongoose.connect(
        'mongodb+srv://arwiz:Wizni12345@cluster0.kfbxgoq.mongodb.net/poker_app?retryWrites=true&w=majority&appName=Cluster0',
      );
      console.log('result of connection....', result);
      return result;
    },
    inject: [ConfigService],
  },
  {
    provide: 'ANSWER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Answer', AnswerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
