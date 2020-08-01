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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const resource_controller_1 = require("./resource.controller");
const utils_1 = require("../utils");
const messages_service_1 = require("../services/messages.service");
let MessagesController = (() => {
    let MessagesController = class MessagesController extends resource_controller_1.ResourceController {
        constructor(service) {
            super(service);
        }
        async createMessage(message) {
            return utils_1.success('Message created successfully!', this.service.create(message));
        }
        async getMessage(id) {
            const message = await this.service.find({
                usersId: id
            });
            return utils_1.success('Messages sent to this user found successfully!', message);
        }
    };
    __decorate([
        common_1.Post('create-message'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], MessagesController.prototype, "createMessage", null);
    __decorate([
        common_1.Get('users/:usersId'),
        __param(0, common_1.Param('usersId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], MessagesController.prototype, "getMessage", null);
    MessagesController = __decorate([
        common_1.Controller('messages'),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesController);
    return MessagesController;
})();
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map