import { ConfigService } from "@nestjs/config";
import { DummySmsService } from "./dummySms.service";
import { TwillioService } from "./twillio.service";
export declare class SmsService {
    private twillioService;
    private dummySmsService;
    private config;
    constructor(twillioService: TwillioService, dummySmsService: DummySmsService, config: ConfigService);
    getClient(): any;
    sendMessage({ body, to }: {
        body: any;
        to: any;
    }): Promise<any>;
    sendOtp(user: any): Promise<any>;
}
