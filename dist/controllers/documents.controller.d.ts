import { ResourceController } from './resource.controller';
import { DocumentsService } from 'src/services/documents.service';
import { ConfigService } from '@nestjs/config';
import { NotificationService } from 'src/services/notification.service';
export declare class DocumentsController extends ResourceController {
    private config;
    private notificationService;
    constructor(config: ConfigService, notificationService: NotificationService, service: DocumentsService);
    findAllAssets(req: any): Promise<{
        message: string;
        data: any;
    }>;
    createAsset(createObject: any): Promise<{
        message: string;
        data: any;
    }>;
    getRoleBasedDocuments(req: any): Promise<{
        message: string;
        data: any;
    }>;
    uploadFile(file: any): any;
    updateAsset(id: any, updateObject: any): Promise<{
        message: string;
        data: any;
    }>;
    uploadAssetsTos3(files: any): Promise<{
        videoS3: any;
        pdfS3: any;
    }>;
}
