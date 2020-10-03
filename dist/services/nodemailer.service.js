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
exports.NodeMailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const config_1 = require("@nestjs/config");
let NodeMailerService = (() => {
    let NodeMailerService = class NodeMailerService {
        constructor(config) {
            this.config = config;
            const conf = {
                service: 'gmail',
                auth: {
                    user: this.config.get('GMAIL_ID'),
                    pass: this.config.get('GMAIL_PASSWORD')
                }
            };
            console.log(conf);
            this.mailTransporter = nodemailer.createTransport(conf);
        }
        async sendEmail(to, subject, text) {
            const mailDetails = {
                from: this.config.get('GMAIL_ID'),
                to,
                subject,
                text
            };
            await this.mailTransporter.sendMail(mailDetails, async function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
        }
    };
    NodeMailerService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [config_1.ConfigService])
    ], NodeMailerService);
    return NodeMailerService;
})();
exports.NodeMailerService = NodeMailerService;
//# sourceMappingURL=nodemailer.service.js.map