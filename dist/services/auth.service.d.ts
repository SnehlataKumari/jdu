import { UsersService } from "./users.service";
import { BrandBiharService } from "./brandBihar.service";
import { LoginDetailService } from "./loginDetail.service";
export declare class AuthService {
    private userService;
    private brandBiharService;
    private loginDetailService;
    constructor(userService: UsersService, brandBiharService: BrandBiharService, loginDetailService: LoginDetailService);
    registerYourself(body: any): Promise<any>;
    requestOTP(user: any): Promise<any>;
    addVideo(requestBody: any): Promise<any>;
    validateUser(mobileNumber: any, otp: any): Promise<any>;
    clearOTP(user: any): Promise<any>;
    postLogin(user: any, { deviceId }: {
        deviceId: any;
    }): Promise<any>;
    logLoginDetails(userModel: any, req: any): Promise<any>;
    getLoginDetails(userId: any): Promise<any[]>;
    validateAuth(payload: any): Promise<any>;
}
