import { Injectable, HttpService } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
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

    this.username = this.config.get('aquausername');
    this.sendername = this.config.get('aquasendername');
    this.smstype = this.config.get('aquasmstype');
    this.apikey = this.config.get('aquaapikey');
  }

  async sendMessage({ body, to }) {
    try {
      const url = `http://login.aquasms.com/sendSMS?username=${this.username}&message=${body}&sendername=${this.sendername}&smstype=${this.smstype}&numbers=${to}&apikey=${this.apikey}`;
      const response = await this.httpService.get(url).toPromise();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}