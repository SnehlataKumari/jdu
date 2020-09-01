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
exports.SpeechController = void 0;
const common_1 = require("@nestjs/common");
const resource_controller_1 = require("./resource.controller");
const speech_service_1 = require("../services/speech.service");
let SpeechController = (() => {
    let SpeechController = class SpeechController extends resource_controller_1.ResourceController {
        constructor(service) {
            super(service);
        }
    };
    SpeechController = __decorate([
        common_1.Controller('speeches'),
        __metadata("design:paramtypes", [speech_service_1.SpeechService])
    ], SpeechController);
    return SpeechController;
})();
exports.SpeechController = SpeechController;
//# sourceMappingURL=speech.controller.js.map