import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// STATE_LEVEL_USER: { key: 'STATE_LEVEL_USER', label: 'State Level User' },
// BLOCK_LEVEL_USER: { key: 'BLOCK_LEVEL_USER', label: 'Block level user' },
// DISTRICT_LEVEL_USER: { key: 'DISTRICT_LEVEL_USER', label: 'District level user' }

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  notificationType: {
    type: String,
    enum: ['BrandBihar', 'Speeches', 'Documents', 'Upcoming Event']
  },
  sendToType: {
    ALL: Boolean,
    CUSTOM: Boolean,
    SUPER_ADMIN: Boolean,
    ADMIN: Boolean,
    STATE_LEVEL_USER: Boolean,
    BLOCK_LEVEL_USER: Boolean,
    DISTRICT_LEVEL_USER: Boolean,
    NATIONAL_LEVEL_USER: Boolean,
  },
  usersId: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]
}, {
  timestamps: true
});


export { NotificationSchema };