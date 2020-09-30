import { Model } from 'mongoose';
import { DBService } from './db.service';
export declare class NotificationService extends DBService {
    constructor(model: Model<any>);
    brandBiharCreated(brandBiharModel: any): Promise<any>;
    documentUploaded(documentModel: any): void;
    speechCreated(speechModel: any): Promise<any>;
    getNotifications(userModel: any): import("mongoose").DocumentQuery<any[], any, {}>;
}
