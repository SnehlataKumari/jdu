import { Model } from 'mongoose';
import { DBService } from './db.service';
import { UsersService } from './users.service';
import { SmsService } from './sms.service';
import { EmailService } from './email.service';
export declare class MessagesService extends DBService {
    private userService;
    private smsService;
    private emailService;
    constructor(model: Model<any>, userService: UsersService, smsService: SmsService, emailService: EmailService);
    sendMessage(message: any): Promise<void>;
    sendSMS(body: any, to: any): Promise<any>;
    sendEmail(body: any, to: any): Promise<void>;
    processBatch(list: any, message: any, cb: any): Promise<void[]>;
}
