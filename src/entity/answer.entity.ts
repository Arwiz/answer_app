import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define AnswerType
@Schema()
export class AnswerType extends Document {
  @Prop({ required: true })
  question_id!: string;

  @Prop()
  group_id?: string;

  @Prop({ required: true })
  answers!: string[];

  @Prop()
  remarks?: string;

  @Prop()
  uploads?: string[];
}

// Define AuditAnswerType

@Schema()
export class AuditAnswerType extends Document {
  @Prop({ required: true })
  _id!: string;

  @Prop({ type: () => AnswerType, _id: false })
  answers!: AnswerType;
}

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  paper_id!: string;

  @Prop({ required: true })
  user_id!: string;

  @Prop({ default: Date.now })
  created_at!: Date;

  @Prop({ default: Date.now })
  updated_at!: Date;

  @Prop({ required: true })
  status!: string;

  @Prop({ type: () => AuditAnswerType })
  answers!: Record<string, AuditAnswerType>;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
