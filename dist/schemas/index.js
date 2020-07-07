"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const class_schema_1 = require("./class.schema");
const asset_schema_1 = require("./asset.schema");
const chapter_schema_1 = require("./chapter.schema");
const subject_schema_1 = require("./subject.schema");
const version_schema_1 = require("./version.schema");
const event_schema_1 = require("./event.schema");
const yatrayen_schema_1 = require("./yatrayen.schema");
const question_schema_1 = require("./question.schema");
exports.default = [
    { name: 'Class', schema: class_schema_1.ClassSchema },
    { name: 'User', schema: user_schema_1.UserSchema },
    { name: 'Asset', schema: asset_schema_1.AssetSchema },
    { name: 'Chapter', schema: chapter_schema_1.ChapterSchema },
    { name: 'Subject', schema: subject_schema_1.SubjectSchema },
    { name: 'Version', schema: version_schema_1.VersionSchema },
    { name: 'Event', schema: event_schema_1.EventSchema },
    { name: 'Yatrayen', schema: yatrayen_schema_1.YatrayenSchema },
    { name: 'Question', schema: question_schema_1.QuestionSchema },
];
//# sourceMappingURL=index.js.map