import { Controller, Get, UseGuards, Post, Body, UseInterceptors, UploadedFile, BadRequestException, Query, Res  } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { ResourceController } from './resource.controller';
import { success, getJsonFromCSV } from 'src/utils';
import { JwtAuthGuard } from 'src/passport/auth.guard';
import * as passwordHash from "password-hash";
import { FileInterceptor } from '@nestjs/platform-express';
import {uniqBy} from 'lodash';
import { NotificationService } from 'src/services/notification.service';
import {join} from 'path';
@Controller('users')
export class UsersController extends ResourceController {
  constructor(
    service: UsersService,
    private notificationService: NotificationService
  ) {
    super(service)
  }

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll());
  }

  @Post()
  createUser(@Body() body) {
    const password = body.password;
    const hashedPassword = passwordHash.generate(password);
    body.password = hashedPassword;
    return success('Resource created successfully!', this.service.create(body));
  }
  
  // @UseGuards(JwtAuthGuard)
  @Post('migrate-users')
  @UseInterceptors(FileInterceptor('file', {}))
  async migrateUsers(@UploadedFile() file) {
    const validatedValues = [];
    const withError = [];

    const users = await getJsonFromCSV(file) as any[];
    
    for( const user of users) {
      try {
        const validatedUser = await this.service.validateUserJson(user);
        const userExits = await this.service.getUserByUsername(validatedUser.username);
        if (!!userExits) {
          throw new Error(`Username already exists: ${validatedUser.username}`);
        }
        const hashedPassword = passwordHash.generate(validatedUser.password);
        validatedUser.password = hashedPassword;
        validatedValues.push(validatedUser);
      } catch (e) {
        withError.push({
          ...user,
          error: e.message
        });
      }
    }

    if (withError.length > 0) {
      throw new BadRequestException(`Please upload valid csv file: Error: ${withError[0].error}`);
    }

    const uniqueUsers = uniqBy(validatedValues, 'username');

    if (uniqueUsers.length !== validatedValues.length) {
      throw new BadRequestException(`Please upload valid csv file: Error: Please check CSV all username must be unique!`);
    }

    const insertedValues = await this.service.insertMany(validatedValues);
    return success('Users created successfully!', insertedValues);
  }


  @Get('notifications')
  async getNotification(@Query('userId') userId) {
    let userModel;
    if(userId) {
      userModel = await this.service.findById(userId);
    }
    return this.notificationService.getNotifications(userModel);
  }

  @Get('sample-csv')
  getUsersSampleCsv(@Res() res) {
    const fileName = 'userMigratesampleV2.csv';
    const filePath = join(__dirname, '../../test_files', fileName);
    res.download(filePath, fileName);
  }

  @Get('default-values-xlsx')
  getUsersDefaultValuesCsv(@Res() res) {
    const fileName = 'DefaultValues.xlsx';
    const filePath = join(__dirname, '../../test_files', fileName);
    res.download(filePath, fileName);
  }

}