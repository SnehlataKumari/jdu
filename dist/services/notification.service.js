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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const db_service_1 = require("./db.service");
const lodash_1 = require("lodash");
let NotificationService = (() => {
    let NotificationService = class NotificationService extends db_service_1.DBService {
        constructor(model) {
            super(model);
        }
        brandBiharCreated(brandBiharModel) {
            return this.create({
                notificationType: 'BrandBihar',
                message: 'New brand bihar created',
                sendToType: {
                    ALL: true
                }
            });
        }
        documentUploaded(documentModel) {
            const roles = {
                ALL: true,
                CUSTOM: true,
                ADMIN: true,
                SUPER_ADMIN: true,
                STATE_LEVEL_USER: true,
                BLOCK_LEVEL_USER: true,
                DISTRICT_LEVEL_USER: true,
                NATIONAL_LEVEL_USER: true,
            };
            const sentTo = lodash_1.pick(roles, documentModel.roles);
            this.create({
                notificationType: 'Documents',
                message: 'New document recieved',
                sendToType: sentTo
            });
        }
        speechCreated(speechModel) {
            return this.create({
                notificationType: 'Speeches',
                message: 'New speech created',
                sendToType: {
                    ALL: true
                }
            });
        }
        getNotifications(userModel) {
            let where = {
                sendToType: {
                    ALL: true
                }
            };
            if (userModel) {
                const userRole = `sendToType.${userModel.role}`;
                where = {
                    $or: [
                        { sendToType: { ALL: true } },
                        { [userRole]: true },
                    ]
                };
            }
            return this.find(where).sort('-createAt');
        }
    };
    NotificationService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_2.InjectModel('Notification')),
        __metadata("design:paramtypes", [mongoose_1.Model])
    ], NotificationService);
    return NotificationService;
})();
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map