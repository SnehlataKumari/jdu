import { Controller, Body, Post, Put, Param, Get, Req, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { success } from 'src/utils';
import { JwtAuthGuard } from 'src/passport/auth.guard';
import { DocumentsService } from 'src/services/documents.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { NotificationService } from 'src/services/notification.service';

@Controller('documents')
export class DocumentsController extends ResourceController {
  constructor(
    private config: ConfigService,
    private notificationService: NotificationService,
    service: DocumentsService) {
    super(service)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllAssets(@Req() req) {
    const assetsList = await this.service.findAll().sort('-_id');
    return success('List found successfully', assetsList);
  }

  @Post()
  async createAsset(@Body() createObject) {
    const document = await this.service.create({ ...createObject });
    await this.notificationService.documentUploaded(document);
    return success('Asset created successfully!', document);
  }

  @UseGuards(JwtAuthGuard)
  @Get('role-wise')
  async getRoleBasedDocuments(@Req() req) {
    const {user} = req;
    return success('Documents find successfully', this.service.find({roles: user.role}));
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {}))
  uploadFile(@UploadedFile() file) {
    const filename = file.filename;
    const destination = '/uploads';
    const path = `${destination}/${filename}`;
    const hostUrl = `${this.config.get('HOST_URL')}`;
    return ({
      hostUrl,
      ...file,
      fullPath: `${hostUrl}${path}`,
      destination,
      path
    });
  }

  @Put(':id')
  async updateAsset(@Param('id') id, @Body() updateObject) {
    const updatedObject = { ...updateObject };
    return success('Asset updated successfully!', this.service.findByIdAndUpdate(id, updatedObject));
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
    }
  }
}