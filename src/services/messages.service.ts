import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';
import { UsersService } from './users.service';
// import { log } from 'console';

@Injectable()
export class MessagesService extends DBService {
  constructor(
    @InjectModel('Message') model: Model<any>,
    private userService: UsersService
  ) {
    super(model);
  }

  async sendMessage(message) {
    let users = [];
    const msgObj = message.toJSON();
    
    if (message.sendToType.ALL) {
      users = await this.userService.findAll();
    } else {
      const where = {
        $or: [
          { role: { $in: Reflect.ownKeys(msgObj.sendToType).filter(sendTo => msgObj.sendToType[sendTo]) } },
          { _id: {$in: message.usersId }}
        ]
      }
      users = await this.userService.find(where);
    }

    
  }
}