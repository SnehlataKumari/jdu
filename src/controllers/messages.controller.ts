import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { ResourceController } from './resource.controller';
import { success } from 'src/utils';
import { MessagesService } from 'src/services/messages.service';
import { JwtAuthGuard } from 'src/passport/auth.guard';
@Controller('messages')
export class MessagesController extends ResourceController {
  constructor(service: MessagesService) {
    super(service)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMessage(@Body() message ) {

    if (message.sendToType.ALL) {
      message.sendToType.CUSTOM = false;
      message.sendToType.STATE_LEVEL_USER = false;
      message.sendToType.BLOCK_LEVEL_USER = false;
      message.sendToType.DISTRICT_LEVEL_USER = false;
    }

    if (!message.sendToType.CUSTOM) {
      message.usersId = [];
    }

    const messageObj = await this.service.create(message);
    await this.service.sendMessage(messageObj);
    return success('Message created successfully!', messageObj);
  }

  @Get('users/:usersId')
  async getMessage(@Param('usersId') id) {
    const message = await this.service.find({$or: [
      {usersId: id},
      { "usersId.0": { "$exists": false }}
    ]});

    return success('Messages sent to this user found successfully!', 
      message
    );
}
}