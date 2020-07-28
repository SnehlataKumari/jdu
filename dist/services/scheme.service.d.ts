import { Model } from 'mongoose';
import { DBService } from './db.service';
export declare class SchemesService extends DBService {
    constructor(model: Model<any>);
}
