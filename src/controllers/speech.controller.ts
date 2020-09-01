import { Controller } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { SpeechService } from 'src/services/speech.service';

@Controller('speeches')
export class SpeechController extends ResourceController {
    constructor(service: SpeechService) {
        super(service)
    }
}