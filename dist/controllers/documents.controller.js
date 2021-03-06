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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const resource_controller_1 = require("./resource.controller");
const utils_1 = require("../utils");
const auth_guard_1 = require("../passport/auth.guard");
const documents_service_1 = require("../services/documents.service");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const notification_service_1 = require("../services/notification.service");
let DocumentsController = (() => {
    let DocumentsController = class DocumentsController extends resource_controller_1.ResourceController {
        constructor(config, notificationService, service) {
            super(service);
            this.config = config;
            this.notificationService = notificationService;
        }
        async findAllAssets(req) {
            const assetsList = await this.service.findAll().sort('-_id');
            return utils_1.success('List found successfully', assetsList);
        }
        async createAsset(createObject) {
            const document = await this.service.create(Object.assign({}, createObject));
            await this.notificationService.documentUploaded(document);
            return utils_1.success('Asset created successfully!', document);
        }
        async getRoleBasedDocuments(req) {
            const { user } = req;
            return utils_1.success('Documents find successfully', this.service.find({ roles: user.role }));
        }
        uploadFile(file) {
            const filename = file.filename;
            const destination = '/uploads';
            const path = `${destination}/${filename}`;
            const hostUrl = `${this.config.get('HOST_URL')}`;
            return (Object.assign(Object.assign({ hostUrl }, file), { fullPath: `${hostUrl}${path}`, destination,
                path }));
        }
        async updateAsset(id, updateObject) {
            const updatedObject = Object.assign({}, updateObject);
            return utils_1.success('Asset updated successfully!', this.service.findByIdAndUpdate(id, updatedObject));
        }
        async uploadAssetsTos3(files) {
            let videoS3, pdfS3;
            const { video, pdf } = files;
            if (video && video[0]) {
                videoS3 = (await this.service.saveFile(video[0])).response;
            }
            if (pdf && pdf[0]) {
                pdfS3 = (await this.service.saveFile(pdf[0])).response;
            }
            return {
                videoS3,
                pdfS3
            };
        }
    };
    __decorate([
        common_1.UseGuards(auth_guard_1.JwtAuthGuard),
        common_1.Get(),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DocumentsController.prototype, "findAllAssets", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DocumentsController.prototype, "createAsset", null);
    __decorate([
        common_1.UseGuards(auth_guard_1.JwtAuthGuard),
        common_1.Get('role-wise'),
        __param(0, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], DocumentsController.prototype, "getRoleBasedDocuments", null);
    __decorate([
        common_1.Post('upload'),
        common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {})),
        __param(0, common_1.UploadedFile()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DocumentsController.prototype, "uploadFile", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], DocumentsController.prototype, "updateAsset", null);
    DocumentsController = __decorate([
        common_1.Controller('documents'),
        __metadata("design:paramtypes", [config_1.ConfigService,
            notification_service_1.NotificationService,
            documents_service_1.DocumentsService])
    ], DocumentsController);
    return DocumentsController;
})();
exports.DocumentsController = DocumentsController;
//# sourceMappingURL=documents.controller.js.map