import { UsersService } from "./users.service";
import { BrandBiharService } from "./brandBihar.service";
export declare class AuthService {
    private userService;
    private brandBiharService;
    constructor(userService: UsersService, brandBiharService: BrandBiharService);
    registerYourself(body: any): Promise<any>;
    requestOTP(user: any): Promise<any>;
    addVideo(requestBody: any): Promise<any>;
    validateUser(mobileNumber: any, otp: any): Promise<any>;
    clearOTP(user: any): Promise<any>;
    postLogin(user: any, { deviceId }: {
        deviceId: any;
    }): Promise<any>;
    validateAuth(payload: any): Promise<any>;
}
