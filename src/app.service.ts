import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer } from './entity/answer.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('ANSWER_MODEL')
    private answerModel: Model<Answer>,
    private config: ConfigService,
  ) {
    console.log('config....', config.get('NODE_ENV'));
  }

  /**
   *
   * @param createAnswerDto
   * @returns Created Answer object
   */

  async create_answer(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const createdAnswer = new this.answerModel(createAnswerDto);
    return await createdAnswer.save();
  }

  async find_all_answer(): Promise<Answer[]> {
    return this.answerModel.find().exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
