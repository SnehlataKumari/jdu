import { ResourceController } from './resource.controller';
import { BrandBiharService } from 'src/services/brandBihar.service';
import { NotificationService } from 'src/services/notification.service';
export declare class BrandBiharController extends ResourceController {
    private notificationService;
    constructor(service: BrandBiharService, notificationService: NotificationService);
    createResource(createObject: any): Promise<{
        message: string;
        data: any;
    }>;
}
