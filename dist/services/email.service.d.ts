import { NodeMailerService } from "./nodemailer.service";
export declare class EmailService {
    private nodeMailerService;
    constructor(nodeMailerService: NodeMailerService);
    sendEmail(to: any, subject: any, text: any): Promise<void>;
}
