import { UserSchema } from "./user.schema";
import { ClassSchema } from "./class.schema";
import { AssetSchema } from "./asset.schema";
import { ChapterSchema } from "./chapter.schema";
import { SubjectSchema } from "./subject.schema";
import { VersionSchema } from "./version.schema";
import { EventSchema } from "./event.schema";
import { YatrayenSchema } from "./yatrayen.schema";

export default  [
  { name: 'Class', schema: ClassSchema },
  { name: 'User', schema: UserSchema },
  { name: 'Asset', schema: AssetSchema },
  { name: 'Chapter', schema: ChapterSchema },
  { name: 'Subject', schema: SubjectSchema },
  { name: 'Version', schema: VersionSchema },
  { name: 'Event', schema: EventSchema},
  { name: 'Yatrayen', schema: YatrayenSchema},
];
