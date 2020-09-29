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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const db_service_1 = require("./db.service");
const users_service_1 = require("./users.service");
const sms_service_1 = require("./sms.service");
const email_service_1 = require("./email.service");
let MessagesService = (() => {
    let MessagesService = class MessagesService extends db_service_1.DBService {
        constructor(model, userService, smsService, emailService) {
            super(model);
            this.userService = userService;
            this.smsService = smsService;
            this.emailService = emailService;
        }
        async sendMessage(message) {
            let users = [];
            const msgObj = message.toJSON();
            const strMessage = message.message;
            if (message.sendToType.ALL) {
                users = await this.userService.findAll();
            }
            else {
                const where = {
                    $or: [
                        { role: { $in: Reflect.ownKeys(msgObj.sendToType).filter(sendTo => msgObj.sendToType[sendTo]) } },
                        { _id: { $in: message.usersId } }
                    ]
                };
                users = await this.userService.find(where);
            }
            if (message.mediumType.SMS) {
                const usersMobileNumber = users
                    .map(user => user.mobileNumber)
                    .filter(mobileNumber => !!mobileNumber)
                    .map(number => `+91${number}`);
                console.log(usersMobileNumber);
                this.processBatch(usersMobileNumber, strMessage, this.sendSMS.bind(this));
            }
            if (message.mediumType.EMAIL) {
                const usersEmail = users
                    .map(user => user.email)
                    .filter(email => !!email);
                this.processBatch(usersEmail, strMessage, this.sendEmail.bind(this));
            }
        }
        async sendSMS(body, to) {
            return await this.smsService.sendMessage({ body, to });
        }
        async sendEmail(body, to) {
            return await this.emailService.sendEmail(to, 'New Message from CM', body);
        }
        processBatch(list, message, cb) {
            const batchSize = 5;
            const promises = new Array(batchSize).fill(0).map(() => Promise.resolve());
            let i = 0;
            for (const mobileNumber of list) {
                promises[i] = promises[i]
                    .then(() => cb(message, mobileNumber))
                    .catch(e => console.log(e));
                i = (i + 1) % batchSize;
            }
            return Promise.all(promises);
        }
    };
    MessagesService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_2.InjectModel('Message')),
        __metadata("design:paramtypes", [mongoose_1.Model,
            users_service_1.UsersService,
            sms_service_1.SmsService,
            email_service_1.EmailService])
    ], MessagesService);
    return MessagesService;
})();
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map