import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { BrandBiharService } from 'src/services/brandBihar.service';

@Controller('brand-bihar')
export class BrandBiharController extends ResourceController {
  constructor(service: BrandBiharService) {
    super(service)
  }
}