"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
const assets_service_1 = require("./assets.service");
const classes_service_1 = require("./classes.service");
const file_service_1 = require("./file.service");
const auth_service_1 = require("./auth.service");
const s3_service_1 = require("./s3.service");
const sms_service_1 = require("./sms.service");
const chapters_service_1 = require("./chapters.service");
const subject_service_1 = require("./subject.service");
const version_service_1 = require("./version.service");
const twillio_service_1 = require("./twillio.service");
const dummySms_service_1 = require("./dummySms.service");
const event_schema_1 = require("../schemas/event.schema");
const events_service_1 = require("./events.service");
const yatrayen_service_1 = require("./yatrayen.service");
const questions_service_1 = require("./questions.service");
const answer_service_1 = require("./answer.service");
const documents_service_1 = require("./documents.service");
exports.default = [
    users_service_1.UsersService,
    assets_service_1.AssetsService,
    classes_service_1.ClassesService,
    file_service_1.FileService,
    auth_service_1.AuthService,
    s3_service_1.S3Service,
    sms_service_1.SmsService,
    classes_service_1.ClassesService,
    chapters_service_1.ChaptersService,
    subject_service_1.SubjectsService,
    version_service_1.VersionService,
    twillio_service_1.TwillioService,
    dummySms_service_1.DummySmsService,
    events_service_1.EventsService,
    yatrayen_service_1.YatrayenService,
    questions_service_1.QuestionsService,
    answer_service_1.AnswersService,
    documents_service_1.DocumentsService
];
//# sourceMappingURL=index.js.map