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
exports.OTPStrategy = void 0;
const passport_custom_1 = require("passport-custom");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const users_service_1 = require("../services/users.service");
let OTPStrategy = (() => {
    let OTPStrategy = class OTPStrategy extends passport_1.PassportStrategy(passport_custom_1.Strategy, 'otpStrategy') {
        constructor(authService) {
            super();
            this.authService = authService;
        }
        async validate(req) {
            const { mobileNumber, otp, deviceId } = req.body;
            const user = await this.authService.validateUser(mobileNumber, otp);
            if (!user) {
                throw new common_1.UnauthorizedException('Otp not matched!');
            }
            if (!deviceId) {
                throw new common_1.UnauthorizedException('Device id is required!');
            }
            await this.authService.postLogin(user, { deviceId });
            return await this.authService.clearOTP(user);
        }
    };
    OTPStrategy = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], OTPStrategy);
    return OTPStrategy;
})();
exports.OTPStrategy = OTPStrategy;
//# sourceMappingURL=otp.strategy.js.map