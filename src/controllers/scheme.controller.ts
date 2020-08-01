import { Controller, Get } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { SchemesService } from 'src/services/scheme.service';
import { success } from 'src/utils';

@Controller('scheme')
export class SchemesController extends ResourceController {
  constructor(
    service: SchemesService
  ) {
    super(service)
  }

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll());
  }

}