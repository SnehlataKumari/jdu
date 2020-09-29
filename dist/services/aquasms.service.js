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
exports.AquasmsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AquasmsService = (() => {
    let AquasmsService = class AquasmsService {
        constructor(config, httpService) {
            this.config = config;
            this.httpService = httpService;
            this.username = this.config.get('aquausername');
            this.sendername = this.config.get('aquasendername');
            this.smstype = this.config.get('aquasmstype');
            this.apikey = this.config.get('aquaapikey');
        }
        async sendMessage({ body, to }) {
            try {
                const url = `http://login.aquasms.com/sendSMS?username=${this.username}&message=${body}&sendername=${this.sendername}&smstype=${this.smstype}&numbers=${to}&apikey=${this.apikey}`;
                const response = await this.httpService.get(url).toPromise();
                return response;
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    AquasmsService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [config_1.ConfigService,
            common_1.HttpService])
    ], AquasmsService);
    return AquasmsService;
})();
exports.AquasmsService = AquasmsService;
//# sourceMappingURL=aquasms.service.js.map