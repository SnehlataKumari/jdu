"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const users_service_1 = require("./users.service");
const brandBihar_service_1 = require("./brandBihar.service");
const loginDetail_service_1 = require("./loginDetail.service");
let AuthService = (() => {
    let AuthService = class AuthService {
        constructor(userService, brandBiharService, loginDetailService) {
            this.userService = userService;
            this.brandBiharService = brandBiharService;
            this.loginDetailService = loginDetailService;
        }
        async registerYourself(body) {
            const user = await this.userService.create(body);
            return user;
        }
        async requestOTP(user) {
            user.otp = utils_1.generateOTP();
            user.save();
            return user;
        }
        async addVideo(requestBody) {
            const video = await this.brandBiharService.create(requestBody);
            return video;
        }
        async validateUser(mobileNumber, otp) {
            const user = await this.userService.findByMobileNumber(mobileNumber);
            if (user && user.otp === otp) {
                return user;
            }
            throw new common_1.UnauthorizedException();
        }
        async clearOTP(user) {
            return this.userService.update(user, {
                otp: ''
            });
        }
        async postLogin(user, { deviceId }) {
            const updateObj = user.devices.length == 2 && !user.devices.includes(deviceId)
                ? { devices: [deviceId] }
                : { $addToSet: { devices: deviceId } };
            return await this.userService.update(user, updateObj);
        }
        async logLoginDetails(userModel, req) {
            const timestamp = Date.now();
            const ip = req.header('x-forwarded-for');
            return await this.loginDetailService.create({
                user: userModel._id,
                ip,
                date: timestamp
            });
        }
        async getLoginDetails(userId) {
            return await this.loginDetailService.find({
                user: userId
            }).sort('-createdAt');
        }
        async validateAuth(payload) {
            return this.userService.findById(payload._id);
        }
    };
    AuthService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [users_service_1.UsersService,
            brandBihar_service_1.BrandBiharService,
            loginDetail_service_1.LoginDetailService])
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map