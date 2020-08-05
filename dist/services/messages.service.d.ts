import { Model } from 'mongoose';
import { DBService } from './db.service';
import { UsersService } from './users.service';
export declare class MessagesService extends DBService {
    private userService;
    constructor(model: Model<any>, userService: UsersService);
    sendMessage(message: any): Promise<void>;
}
