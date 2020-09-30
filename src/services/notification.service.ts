import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';
import { pick } from 'lodash';

@Injectable()
export class NotificationService extends DBService {
  constructor(
    @InjectModel('Notification') model: Model<any>,
  ) {
    super(model);
  }

  brandBiharCreated(brandBiharModel) {
    return this.create({
      notificationType: 'BrandBihar',
      message: 'New brand bihar created',
      sendToType: {
        ALL: true
      }
    });
  }

  documentUploaded(documentModel) {
    const roles = {
      ALL: true,
      CUSTOM: true,
      ADMIN: true,
      SUPER_ADMIN: true,
      STATE_LEVEL_USER: true,
      BLOCK_LEVEL_USER: true,
      DISTRICT_LEVEL_USER: true,
      NATIONAL_LEVEL_USER: true,
    };
    const sentTo = pick(roles, documentModel.roles);
    this.create({
      notificationType: 'Documents',
      message: 'New document recieved',
      sendToType: sentTo
    });
  }

  speechCreated(speechModel) {
    return this.create({
      notificationType: 'Speeches',
      message: 'New speech created',
      sendToType: {
        ALL: true
      }
    });
  }

  getNotifications(userModel) {
    let where: any = {
      sendToType: {
        ALL: true
      }
    }
    
    if (userModel) {
      const userRole = `sendToType.${userModel.role}`;
      where = {
       $or: [
         { sendToType: { ALL: true }},
          { [userRole] :  true },
       ]
      }
    }

    return this.find(where).sort('-createAt');
  }
}