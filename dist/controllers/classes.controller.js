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
exports.ClassesController = void 0;
const common_1 = require("@nestjs/common");
const resource_controller_1 = require("./resource.controller");
const classes_service_1 = require("../services/classes.service");
let ClassesController = (() => {
    let ClassesController = class ClassesController extends resource_controller_1.ResourceController {
        constructor(service) {
            super(service);
        }
    };
    ClassesController = __decorate([
        common_1.Controller('classes'),
        __metadata("design:paramtypes", [classes_service_1.ClassesService])
    ], ClassesController);
    return ClassesController;
})();
exports.ClassesController = ClassesController;
//# sourceMappingURL=classes.controller.js.map