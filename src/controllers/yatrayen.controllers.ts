import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { YatrayenService } from 'src/services/yatrayen.service';

@Controller('yatrayen')
export class YatrayenController extends ResourceController {
  constructor(
    service: YatrayenService,
  ) {
    super(service);
  }

}