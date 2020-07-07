import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';

@Injectable()
export class QuestionsService extends DBService {
  constructor(@InjectModel('Question') model: Model<any>) {
    super(model);
  }
}