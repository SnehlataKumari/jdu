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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const resource_controller_1 = require("./resource.controller");
const questions_service_1 = require("../services/questions.service");
const answer_service_1 = require("../services/answer.service");
const utils_1 = require("../utils");
let QuestionsController = (() => {
    let QuestionsController = class QuestionsController extends resource_controller_1.ResourceController {
        constructor(service, answerService) {
            super(service);
            this.answerService = answerService;
        }
        findAll() {
            return utils_1.success('List found successfully', this.service.findAll());
        }
        async submitResponse(body) {
            const { user } = body, answers = __rest(body, ["user"]);
            const questions = await Promise.all(Reflect.ownKeys(answers)
                .map(questionId => (Object.assign({ questionId, answer: answers[questionId] }, user)))
                .filter(({ answer }) => !!answer)
                .map((question) => this.answerService.create(question)));
            return utils_1.success('Answers submitted successfully', questions);
        }
        async getQuestionsWithAnswers() {
            const questions = (await this.service.find({}).populate('answers'));
            const qs = questions.map(element => {
                return element.toObject({ virtuals: true });
            });
            return qs;
        }
        async getAllAnswers() {
            return (await this.answerService.find({}));
        }
        async getAnswersOfQuestion(questionId) {
            return (await this.answerService.find({ questionId }));
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QuestionsController.prototype, "findAll", null);
    __decorate([
        common_1.Post('submit-response'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QuestionsController.prototype, "submitResponse", null);
    __decorate([
        common_1.Get('with-answers'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QuestionsController.prototype, "getQuestionsWithAnswers", null);
    __decorate([
        common_1.Get('answers'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], QuestionsController.prototype, "getAllAnswers", null);
    __decorate([
        common_1.Get('/:id/answers'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], QuestionsController.prototype, "getAnswersOfQuestion", null);
    QuestionsController = __decorate([
        common_1.Controller('questions'),
        __metadata("design:paramtypes", [questions_service_1.QuestionsService,
            answer_service_1.AnswersService])
    ], QuestionsController);
    return QuestionsController;
})();
exports.QuestionsController = QuestionsController;
//# sourceMappingURL=questions.controller.js.map