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
exports.TwillioService = void 0;
const common_1 = require("@nestjs/common");
const twilio = require("twilio");
const config_1 = require("@nestjs/config");
const console_1 = require("console");
let TwillioService = (() => {
    let TwillioService = class TwillioService {
        constructor(config) {
            this.config = config;
            this.twilioAccountSid = this.config.get('TwilioAccountSid');
            this.twilioAuthToken = this.config.get('TwilioAuthToken');
            this.twillioNumber = this.config.get('TwilioMobileNumber');
            this.client = twilio(this.twilioAccountSid, this.twilioAuthToken);
        }
        async sendMessage({ body, to }) {
            try {
                return await this.client.messages.create({
                    body,
                    to,
                    from: this.twillioNumber
                });
            }
            catch (error) {
                console_1.log(error);
            }
        }
    };
    TwillioService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [config_1.ConfigService])
    ], TwillioService);
    return TwillioService;
})();
exports.TwillioService = TwillioService;
//# sourceMappingURL=twillio.service.js.map