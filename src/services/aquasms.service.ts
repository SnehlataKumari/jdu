import { Injectable, HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { log } from "console";

@Injectable()
export class AquasmsService {

  username;
  sendername;
  smstype;
  apikey;
  constructor(
    private config: ConfigService,
    private httpService: HttpService
  ) {

    this.username = this.config.get('username');
    this.sendername = this.config.get('sendername');
    this.smstype = this.config.get('smstype');
    this.apikey = this.config.get('apikey');
    // http://login.aquasms.com/sendSMS?username=anmolsovit@gmail.com&message=XXXXXXXXXX&sendername=XYZ&smstype=TRANS&numbers=<mobile_numbers>&apikey=1f97d5ce-2449-46c0-b58d-dfb1a03efb78
  }

  async sendMessage({ body, to }) {
    try {
      const url = `http://login.aquasms.com/sendSMS?username=${this.username}&message=${body}&sendername=${this.sendername}&smstype=${this.smstype}&numbers=${to}&apikey=${this.apikey}`;
      return await this.httpService.get(url).toPromise();
    } catch (error) {
      log(error);
    }
  }
}