import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';

@Injectable()
export class LoginDetailService extends DBService {
  constructor(@InjectModel('LoginDetail') model: Model<any>) {
    super(model);
  }
}