import { Controller, Get, UseGuards, Post, Body,  } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { ResourceController } from './resource.controller';
import { success } from 'src/utils';
import { JwtAuthGuard } from 'src/passport/auth.guard';
import * as passwordHash from "password-hash";

@Controller('users')
export class UsersController extends ResourceController {
  constructor(service: UsersService) {
    super(service)
  }

  @Get()
  findAll() {
    return success('List found successfully', this.service.findAll());
  }

  @Post()
  createUser(@Body() body) {
    const password = body.password;
    var hashedPassword = passwordHash.generate(password);
    body.password = hashedPassword;
    return success('Resource created successfully!', this.service.create(body));
  }
}