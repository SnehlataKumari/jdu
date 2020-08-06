import { Injectable } from "@nestjs/common";
import * as twilio from "twilio";
import { ConfigService } from "@nestjs/config";
import { log } from "console";

@Injectable()
export class TwillioService {

  twilioAccountSid;
  twilioAuthToken;
  twillioNumber;
  client;

  constructor(
    private config: ConfigService
  ) {
    this.twilioAccountSid = this.config.get('TwilioAccountSid');
    this.twilioAuthToken = this.config.get('TwilioAuthToken');
    this.twillioNumber = this.config.get('TwilioMobileNumber')
    this.client = twilio(this.twilioAccountSid, this.twilioAuthToken);
  }

  async sendMessage({ body, to }) {
    try {
      return await this.client.messages.create({
        body,
        to,  // Text this number
        from: this.twillioNumber // From a valid Twilio number
      });
    } catch (error) {
      log(error);
    }
  }
}