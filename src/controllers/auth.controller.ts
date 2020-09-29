import { Controller, Post, Body, UseGuards, Request, UnauthorizedException, Param } from "@nestjs/common";
import { UsersService } from "src/services/users.service";
import { AuthService } from "src/services/auth.service";
import { success } from "src/utils";
import { AuthGuard } from "@nestjs/passport";
import { JwtService } from '@nestjs/jwt';
import { SmsService } from "src/services/sms.service";
import { VersionService } from "src/services/version.service";
import { JwtAuthGuard } from "src/passport/auth.guard";
import * as passwordHash from "password-hash";

@Controller('auth')
export class AuthController {
  constructor(
    private service: AuthService,
    private usersService: UsersService,
    private jwtService: JwtService,
    private smsService: SmsService,
    private versionService: VersionService,
  ) {}

  @Post('register-user')
  registerYourself(@Request() req) {
    const { body } = req;

    const password = body.password;
    const hashedPassword = passwordHash.generate(password); 
    body.password = hashedPassword;
    const registerYourself = this.service.registerYourself(body);
    return  registerYourself;
  }

  @Post(':userId/update-password')
  async changePassword(@Param('userId') userId, @Body() requestBody) {
    const userModel = await this.usersService.findById(userId);
    const {newPassword } = requestBody;
    
    if (!userModel) {
      throw new UnauthorizedException('User not found!');
    }
    const hashNewPassword = passwordHash.generate(newPassword);
    return await this.usersService.update(userModel, { password: hashNewPassword });
  }


  @Post('manage-brandBihar')
  async manageBrandBihar(@Body() requestBody){
    const manageBrandBihar = await this.service.addVideo(requestBody);
    return {
      message: 'video added successfully.',
      manageBrandBihar
    };
  }

  @Post('simple-login')
  async simpleLogin(@Body() body) {
    
    const {email, password } = body;
    const user = await this.usersService.findOne({email});
    
    const encryptedPassword = passwordHash.verify(password, user.password);
    
    if(encryptedPassword){
      return success('logged in successfully', {user});
    }else{
      return 'wrong password';
    }
  }

  @Post('login-with-username')
  async loginWithUsername(@Body() body) {

    const { username, password } = body;
  
    const user = await this.usersService.findOne({ username });
    if (!user) {
      throw new UnauthorizedException('User not found!');
    }
    const encryptedPassword = passwordHash.verify(password, user.password);

    if (encryptedPassword) {
      return success('logged in successfully', { user, access_token: this.jwtService.sign(user.toJSON()) });
    } else {
      throw new UnauthorizedException('Invalid credentials');;
    }
  }

  @Post('request-otp')
  async requestOtp(@Body() requestBody) {
    try {
      const { mobileNumber } = requestBody;
      let user = await this.usersService.findByMobileNumber(mobileNumber);
  
      if(!user) {
        user = await this.usersService.create({mobileNumber});
      }
  
      const requestOtp = await this.service.requestOTP(user);
      await this.smsService.sendOtp(user);
      return success('Otp generated successfully!', requestOtp);
      
    } catch (error) {
      console.error(error);
      
      return 'Error'
    }
  }
  
  @Post('create-admin')
  async createAdmin(@Body() requestBody) {
    const { mobileNumber, name, password, username } = requestBody;
    const hashedPassword = passwordHash.generate(password);
    const user = await this.usersService.create({ mobileNumber, name, password: hashedPassword, username, role: 'ADMIN' });
    return success('Admin created successfully!', { user, access_token: this.jwtService.sign(user.toJSON())});
  }
  
  @Post('login-admin')
  async loginAdmin(@Body() requestBody) {
    const { password, username } = requestBody;
    const user = await this.usersService.findOne({
      username,
      password,
      role: 'ADMIN'
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return success('Admin created successfully!', { user, access_token: this.jwtService.sign(user.toJSON())});
  }

  // @UseGuards(AuthGuard('otpStrategy'))
  @Post('login')
  async login(@Request() req) {
    const { user } = req;
    return {
      access_token: this.jwtService.sign(user.toJSON()),
      user
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('update-version')
  async updateVersion(@Request() req) {
    const {body} = req;

    const version = await this.versionService.findOne({});
    if(!version) {
      await this.versionService.create(body);
    } else {
      await this.versionService.update(version, body);
    }

    return this.versionService.findOne({});
    
  }
}
