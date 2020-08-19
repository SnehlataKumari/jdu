import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';


@Injectable()
export class BrandBiharService extends DBService {
  constructor(@InjectModel('BrandBihar') model: Model<any>) {
    super(model);
  }
  
}