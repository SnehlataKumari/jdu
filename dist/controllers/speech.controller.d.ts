import { ResourceController } from './resource.controller';
import { SpeechService } from 'src/services/speech.service';
import { NotificationService } from 'src/services/notification.service';
export declare class SpeechController extends ResourceController {
    private notificationService;
    constructor(notificationService: NotificationService, service: SpeechService);
    createResource(createObject: any): Promise<{
        message: string;
        data: any;
    }>;
}
