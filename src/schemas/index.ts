import { UserSchema } from "./user.schema";
import { ClassSchema } from "./class.schema";
import { AssetSchema } from "./asset.schema";
import { ChapterSchema } from "./chapter.schema";
import { SubjectSchema } from "./subject.schema";
import { VersionSchema } from "./version.schema";
import { EventSchema } from "./event.schema";
import { YatrayenSchema } from "./yatrayen.schema";
import { QuestionSchema } from "./question.schema";
import { AnswerSchema } from "./answer.schema";
import { DocumentSchema } from "./document.schema";
import { SchemeSchema } from "./scheme.schema";
import { MessageSchema } from "./message.schema";
import { BrandBiharSchema } from "./brandBihar.schema";
import { SpeechSchema } from "./speech.schema";
import { LoginDetail } from "./loginDetail.schema";

export default  [
  { name: 'Class', schema: ClassSchema },
  { name: 'User', schema: UserSchema },
  { name: 'Asset', schema: AssetSchema },
  { name: 'Chapter', schema: ChapterSchema },
  { name: 'Subject', schema: SubjectSchema },
  { name: 'Version', schema: VersionSchema },
  { name: 'Event', schema: EventSchema},
  { name: 'Yatrayen', schema: YatrayenSchema},
  { name: 'Question', schema: QuestionSchema},
  { name: 'Answer', schema: AnswerSchema},
  { name: 'Document', schema: DocumentSchema},
  { name: 'Scheme', schema: SchemeSchema},
  { name: 'Message', schema: MessageSchema},
  { name: 'BrandBihar', schema: BrandBiharSchema},
  { name: 'Speech', schema: SpeechSchema},
  { name: 'LoginDetail', schema: LoginDetail},
];
