import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { SpeechService } from 'src/services/speech.service';
import { JwtAuthGuard } from 'src/passport/auth.guard';
import { success } from 'src/utils';
import { NotificationService } from 'src/services/notification.service';

@Controller('speeches')
export class SpeechController extends ResourceController {
  constructor(
    private notificationService: NotificationService,
    service: SpeechService
  ) {
    super(service)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createResource(@Body() createObject) {
    const speech = await this.service.create(createObject);
    await this.notificationService.speechCreated(speech);
    return success('Resource created successfully!', speech);
  }
  
}