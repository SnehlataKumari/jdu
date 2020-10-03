import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NodeMailerService {

  mailTransporter;
  constructor(
    private config: ConfigService
  ) {
    const conf = {
      service: 'gmail',
      auth: {
        user: this.config.get('GMAIL_ID'),
        pass: this.config.get('GMAIL_PASSWORD')
      }
    };

    console.log(conf);
    
    this.mailTransporter = nodemailer.createTransport(conf);

  }

  async sendEmail(to, subject, text) {
    const mailDetails = {
      from: this.config.get('GMAIL_ID'), // 'amanraza2507@gmail.com',
      to,
      subject,
      text
    };
    await this.mailTransporter.sendMail(mailDetails, async function (err, data) {
      if (err) {
        console.log(err);
      }
    });
  }
}




