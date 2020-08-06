import { ConfigService } from "@nestjs/config";
export declare class TwillioService {
    private config;
    twilioAccountSid: any;
    twilioAuthToken: any;
    twillioNumber: any;
    client: any;
    constructor(config: ConfigService);
    sendMessage({ body, to }: {
        body: any;
        to: any;
    }): Promise<any>;
}
