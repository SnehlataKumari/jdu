import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { EventsService } from 'src/services/events.service';

@Controller('events')
export class EventsController extends ResourceController {
  constructor(
    service: EventsService,
  ) {
    super(service)
  }
}