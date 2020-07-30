import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { success } from 'src/utils';
import { MessagesService } from 'src/services/messages.service';

@Controller('messages')
export class MessagesController extends ResourceController {
  constructor(service: MessagesService) {
    super(service)
  }
  @Post('create-message')
  async createMessage(@Body() message ) {
    return success('Message created successfully!', this.service.create(message));
  }
  @Get('users/:usersId')
  async getMessage(@Param('usersId') id) {
    const message = await this.service.find({
      usersId: id
    });
    return success('Messages sent to this user found successfully!', 
      message
    );
}
}