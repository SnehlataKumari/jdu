import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { QuestionsService } from 'src/services/questions.service';

@Controller('questions')
export class QuestionsController extends ResourceController {
  constructor(
    service: QuestionsService,
  ) {
    super(service)
  }
}