import { HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
export declare class AquasmsService {
    private config;
    private httpService;
    username: any;
    sendername: any;
    smstype: any;
    apikey: any;
    constructor(config: ConfigService, httpService: HttpService);
    sendMessage({ body, to }: {
        body: any;
        to: any;
    }): Promise<import("axios").AxiosResponse<any>>;
}
