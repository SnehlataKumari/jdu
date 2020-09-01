import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';


@Injectable()
export class SpeechService extends DBService {
    constructor(@InjectModel('Speech') model: Model<any>) {
        super(model);
    }

}