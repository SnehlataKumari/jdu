import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { SchemesService } from 'src/services/scheme.service';

@Controller('scheme')
export class SchemesController extends ResourceController {
  constructor(
    service: SchemesService
  ) {
    super(service)
  }

}