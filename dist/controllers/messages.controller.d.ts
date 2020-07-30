import { ResourceController } from './resource.controller';
import { MessagesService } from 'src/services/messages.service';
export declare class MessagesController extends ResourceController {
    constructor(service: MessagesService);
    createMessage(message: any): Promise<{
        message: string;
        data: any;
    }>;
    getMessage(id: any): Promise<{
        message: string;
        data: any;
    }>;
}
