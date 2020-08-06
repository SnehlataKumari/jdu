import { NodeMailerService } from "./nodemailer.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService {
  constructor(
    private nodeMailerService: NodeMailerService
  ) {
  }

  async sendEmail(to, subject, text) {
    this.nodeMailerService.sendEmail(to, subject, text);
  }
}