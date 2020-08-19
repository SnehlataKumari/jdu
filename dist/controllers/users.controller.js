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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../services/users.service");
const resource_controller_1 = require("./resource.controller");
const utils_1 = require("../utils");
const auth_guard_1 = require("../passport/auth.guard");
const passwordHash = require("password-hash");
const platform_express_1 = require("@nestjs/platform-express");
const lodash_1 = require("lodash");
let UsersController = (() => {
    let UsersController = class UsersController extends resource_controller_1.ResourceController {
        constructor(service) {
            super(service);
        }
        findAll() {
            return utils_1.success('List found successfully', this.service.findAll());
        }
        createUser(body) {
            const password = body.password;
            const hashedPassword = passwordHash.generate(password);
            body.password = hashedPassword;
            return utils_1.success('Resource created successfully!', this.service.create(body));
        }
        async migrateUsers(file) {
            const validatedValues = [];
            const withError = [];
            const users = await utils_1.getJsonFromCSV(file);
            for (const user of users) {
                try {
                    const validatedUser = await this.service.validateUserJson(user);
                    const userExits = await this.service.getUserByUsername(validatedUser.username);
                    if (!!userExits) {
                        throw new Error(`Username already exists: ${validatedUser.username}`);
                    }
                    const hashedPassword = passwordHash.generate(validatedUser.password);
                    validatedUser.password = hashedPassword;
                    validatedValues.push(validatedUser);
                }
                catch (e) {
                    withError.push(Object.assign(Object.assign({}, user), { error: e.message }));
                }
            }
            if (withError.length > 0) {
                throw new common_1.BadRequestException(`Please upload valid csv file: Error: ${withError[0].error}`);
            }
            const uniqueUsers = lodash_1.uniqBy(validatedValues, 'username');
            if (uniqueUsers.length !== validatedValues.length) {
                throw new common_1.BadRequestException(`Please upload valid csv file: Error: Please check CSV all username must be unique!`);
            }
            const insertedValues = await this.service.insertMany(validatedValues);
            return utils_1.success('Users created successfully!', insertedValues);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "findAll", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "createUser", null);
    __decorate([
        common_1.Post('migrate-users'),
        common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {})),
        __param(0, common_1.UploadedFile()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], UsersController.prototype, "migrateUsers", null);
    UsersController = __decorate([
        common_1.Controller('users'),
        __metadata("design:paramtypes", [users_service_1.UsersService])
    ], UsersController);
    return UsersController;
})();
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map