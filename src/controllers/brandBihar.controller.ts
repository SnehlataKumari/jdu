import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { BrandBiharService } from 'src/services/brandBihar.service';
import { NotificationService } from 'src/services/notification.service';
import { success } from 'src/utils';
import { JwtAuthGuard } from 'src/passport/auth.guard';

@Controller('brand-bihar')
export class BrandBiharController extends ResourceController {
  constructor(
    service: BrandBiharService,
    private notificationService: NotificationService
  ) {
    super(service)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createResource(@Body() createObject) {
    const brandBihar = await this.service.create(createObject);
    this.notificationService.brandBiharCreated(brandBihar);
    return success('Resource created successfully!', brandBihar);
  }

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll().sort('-_id'));
  }


}