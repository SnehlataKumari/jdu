import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';

@Injectable()
export class SchemesService extends DBService {
  constructor(@InjectModel('Scheme') model: Model<any>) {
    super(model);
  }
}