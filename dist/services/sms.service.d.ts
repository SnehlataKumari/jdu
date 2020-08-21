import { ConfigService } from "@nestjs/config";
import { DummySmsService } from "./dummySms.service";
import { AquasmsService } from "./aquasms.service";
export declare class SmsService {
    private dummySmsService;
    private aquasmsService;
    private config;
    constructor(dummySmsService: DummySmsService, aquasmsService: AquasmsService, config: ConfigService);
    getClient(): any;
    sendMessage({ body, to }: {
        body: any;
        to: any;
    }): Promise<any>;
    sendOtp(user: any): Promise<any>;
}
