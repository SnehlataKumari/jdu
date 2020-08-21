import { Controller, Get } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { YatrayenService } from 'src/services/yatrayen.service';
import { success } from 'src/utils';

@Controller('yatrayen')
export class YatrayenController extends ResourceController {
  constructor(
    service: YatrayenService,
  ) {
    super(service);
  }

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll());
  }

}