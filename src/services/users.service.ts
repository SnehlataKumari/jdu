import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DBService } from './db.service';
import * as Joi from '@hapi/joi';
import { USER_ROLES, getKeys } from 'src/constants';

const userSchem = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid(...getKeys(USER_ROLES)).required()
});

const usersSchema = Joi.array().items(userSchem);

@Injectable()
export class UsersService extends DBService {
  constructor(@InjectModel('User') model: Model<any>) {
    super(model);
  }

  async findByMobileNumber(mobileNumber) {
    return this.findOne({
      mobileNumber
    });
  }

  validateUserJson(userObject) {
    return userSchem.validateAsync(userObject, { allowUnknown: true});
  }

  async getUserByUsername(username) {
    return this.findOne({username});
  }


}