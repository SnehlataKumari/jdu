import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';

@Injectable()
export class EventsService extends DBService {
  constructor(@InjectModel('Event') model: Model<any>) {
    super(model);
  }
}