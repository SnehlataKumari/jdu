import { UsersService } from "src/services/users.service";
import { AuthService } from "src/services/auth.service";
import { JwtService } from '@nestjs/jwt';
import { SmsService } from "src/services/sms.service";
import { VersionService } from "src/services/version.service";
export declare class AuthController {
    private service;
    private usersService;
    private jwtService;
    private smsService;
    private versionService;
    constructor(service: AuthService, usersService: UsersService, jwtService: JwtService, smsService: SmsService, versionService: VersionService);
    registerYourself(req: any): Promise<any>;
    changePassword(userId: any, requestBody: any): Promise<any>;
    getLoginDetails(userId: any): Promise<any[]>;
    manageBrandBihar(requestBody: any): Promise<{
        message: string;
        manageBrandBihar: any;
    }>;
    simpleLogin(body: any): Promise<{
        message: string;
        data: any;
    } | "wrong password">;
    loginWithUsername(body: any, req: any): Promise<{
        message: string;
        data: any;
    }>;
    requestOtp(requestBody: any): Promise<"Error" | {
        message: string;
        data: any;
    }>;
    createAdmin(requestBody: any): Promise<{
        message: string;
        data: any;
    }>;
    loginAdmin(requestBody: any): Promise<{
        message: string;
        data: any;
    }>;
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    updateVersion(req: any): Promise<any>;
}
