"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("./users.controller");
const classes_controller_1 = require("./classes.controller");
const assets_controller_1 = require("./assets.controller");
const auth_controller_1 = require("./auth.controller");
const chapters_controller_1 = require("./chapters.controller");
const subject_controller_1 = require("./subject.controller");
const payments_controller_1 = require("./payments.controller");
const events_controller_1 = require("./events.controller");
const yatrayen_controllers_1 = require("./yatrayen.controllers");
const questions_controller_1 = require("./questions.controller");
const documents_controller_1 = require("./documents.controller");
const scheme_controller_1 = require("./scheme.controller");
const messages_controller_1 = require("./messages.controller");
const brandBihar_controller_1 = require("./brandBihar.controller");
exports.default = [
    users_controller_1.UsersController,
    classes_controller_1.ClassesController,
    assets_controller_1.AssetsController,
    auth_controller_1.AuthController,
    chapters_controller_1.ChaptersController,
    subject_controller_1.SubjectsController,
    payments_controller_1.PaymentsController,
    events_controller_1.EventsController,
    yatrayen_controllers_1.YatrayenController,
    questions_controller_1.QuestionsController,
    documents_controller_1.DocumentsController,
    scheme_controller_1.SchemesController,
    messages_controller_1.MessagesController,
    brandBihar_controller_1.BrandBiharController,
];
//# sourceMappingURL=index.js.map