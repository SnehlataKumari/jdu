import { UsersService } from 'src/services/users.service';
import { ResourceController } from './resource.controller';
import { NotificationService } from 'src/services/notification.service';
export declare class UsersController extends ResourceController {
    private notificationService;
    constructor(service: UsersService, notificationService: NotificationService);
    findAll(): Promise<{
        message: string;
        data: any;
    }>;
    createUser(body: any): Promise<{
        message: string;
        data: any;
    }>;
    migrateUsers(file: any): Promise<{
        message: string;
        data: any;
    }>;
    getNotification(userId: any): Promise<any[]>;
    getUsersSampleCsv(res: any): void;
    getUsersDefaultValuesCsv(res: any): void;
}
