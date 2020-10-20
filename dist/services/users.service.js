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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const db_service_1 = require("./db.service");
const Joi = require("@hapi/joi");
const constants_1 = require("../constants");
const passwordExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const passwordSchema = Joi.string()
    .pattern(passwordExpression);
const userSchem = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: passwordSchema.required(),
    email: Joi.string().email().required(),
    mobileNumber: Joi.string().min(10).max(10).required(),
    role: Joi.string().valid(...constants_1.getKeys(constants_1.USER_ROLES)).required()
});
const usersSchema = Joi.array().items(userSchem);
let UsersService = (() => {
    let UsersService = class UsersService extends db_service_1.DBService {
        constructor(model) {
            super(model);
        }
        async findByMobileNumber(mobileNumber) {
            return this.findOne({
                mobileNumber
            });
        }
        validateUserJson(userObject) {
            return userSchem.validateAsync(userObject, { allowUnknown: true });
        }
        async getUserByUsername(username) {
            return this.findOne({ username });
        }
    };
    UsersService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_2.InjectModel('User')),
        __metadata("design:paramtypes", [mongoose_1.Model])
    ], UsersService);
    return UsersService;
})();
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map