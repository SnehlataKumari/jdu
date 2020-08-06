import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';
import { UsersService } from './users.service';
import { SmsService } from './sms.service';
import { EmailService } from './email.service';

@Injectable()
export class MessagesService extends DBService {
  constructor(
    @InjectModel('Message') model: Model<any>,
    private userService: UsersService,
    private smsService: SmsService,
    private emailService: EmailService
  ) {
    super(model);
  }

  async sendMessage(message) {
    let users = [];
    const msgObj = message.toJSON();
    const strMessage = message.message;
    
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

    console.log(message);

    if(message.mediumType.SMS) {
      const usersMobileNumber = users
        .map(user => user.mobileNumber)
        .filter(mobileNumber => !!mobileNumber)
        .map(number => `+91${number}`);
      this.processBatch(usersMobileNumber, strMessage, this.sendSMS.bind(this));
    }

    if (message.mediumType.EMAIL) {
      const usersEmail = users
        .map(user => user.email)
        .filter(email => !!email);
        this.processBatch(usersEmail, strMessage, this.sendEmail.bind(this));
    }

  }

  async sendSMS(body, to) {
    return await this.smsService.sendMessage({ body, to });
  }
  
  async sendEmail(body, to) {
    return await this.emailService.sendEmail(to, 'New Message from CM', body);
  }

  processBatch(list, message, cb) {
    const batchSize = 5;
    const promises = new Array(batchSize).fill(0).map(() => Promise.resolve());
    let i = 0;

    for (const mobileNumber of list) {
      promises[i] = promises[i]
        .then(() => cb(message, mobileNumber))
        .catch(e => console.log(e));
      i = (i + 1) % batchSize;
    }

    return Promise.all(promises);

  }
}