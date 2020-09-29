import { Injectable, UnauthorizedException } from "@nestjs/common";
import { generateOTP } from "src/utils";
import { UsersService } from "./users.service";
import { BrandBiharService } from "./brandBihar.service";
import { LoginDetailService } from "./loginDetail.service";

@Injectable()
export class AuthService {

  constructor(
    private userService: UsersService,
    private brandBiharService: BrandBiharService,
    private loginDetailService: LoginDetailService
  ) { }

  async registerYourself(body) {
    const user = await this.userService.create(body);
    return user;
  }

  async requestOTP(user) {
    user.otp = generateOTP();
    user.save();
    return user;
  }

  async addVideo(requestBody) {
    const video = await this.brandBiharService.create(requestBody);
    return video;
  }

  async validateUser(mobileNumber, otp) {
    const user = await this.userService.findByMobileNumber(mobileNumber);

    if (user && user.otp === otp) {
      return user;
    }

    throw new UnauthorizedException();
  }

  async clearOTP(user) {
    return this.userService.update(user, {
      otp: ''
    })
  }

  async postLogin(user, { deviceId }) {
    const updateObj = user.devices.length == 2 && !user.devices.includes(deviceId)
      ? { devices: [deviceId] }
      : { $addToSet: { devices: deviceId } };
    return await this.userService.update(user, updateObj);
  }

  async logLoginDetails(userModel, req) {
    const timestamp = Date.now();
    const ip = req.connection.remoteAddress;

    return await this.loginDetailService.create({
      user: userModel._id,
      ip,
      date: timestamp
    });

  }

  async getLoginDetails(userId) {
    return await this.loginDetailService.find({
      user: userId
    }).sort('-createdAt');
  }

  async validateAuth(payload) {
    return this.userService.findById(payload._id);
  }


}
