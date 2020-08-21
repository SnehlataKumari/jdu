import { UsersService } from "./users.service";
import { AssetsService } from "./assets.service";
import { ClassesService } from "./classes.service";
import { FileService } from "./file.service";
import { AuthService } from "./auth.service";
import { S3Service } from "./s3.service";
import { SmsService } from "./sms.service";
import { ChaptersService } from "./chapters.service";
import { SubjectsService } from "./subject.service";
import { VersionService } from "./version.service";
// import { TwillioService } from "./twillio.service";
import { DummySmsService } from "./dummySms.service";
import { EventSchema } from "src/schemas/event.schema";
import { EventsService } from "./events.service";
import { YatrayenService } from "./yatrayen.service";
import { QuestionsService } from "./questions.service";
import { AnswersService } from "./answer.service";
import { DocumentsService } from "./documents.service";
import { SchemesService } from "./scheme.service";
import { MessagesService } from "./messages.service";
import { NodeMailerService } from "./nodemailer.service";
import { EmailService } from "./email.service";
import { AquasmsService } from "./aquasms.service";
import { BrandBiharService } from "./brandBihar.service";

export default [
  UsersService,
  AssetsService,
  ClassesService,
  FileService,
  AuthService,
  S3Service,
  SmsService,
  ClassesService,
  ChaptersService,
  SubjectsService,
  VersionService,
  DummySmsService,
  EventsService,
  YatrayenService,
  QuestionsService,
  AnswersService,
  DocumentsService,
  SchemesService,
  MessagesService,
  // TwillioService,
  NodeMailerService,
  EmailService,
  AquasmsService,
  BrandBiharService,
];
