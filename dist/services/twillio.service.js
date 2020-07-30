"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwillioService = void 0;
const twilio = require("twilio");
class TwillioService {
    constructor(config) {
        this.config = config;
        this.twilioAccountSid = this.config.get('TwilioAccountSid');
        this.twilioAuthToken = this.config.get('TwilioAuthToken');
        this.client = twilio(this.twilioAccountSid, this.twilioAuthToken);
    }
    async sendMessage({ body, to }) {
        return this.client.messages.create({
            body,
            to,
            from: '+12058830527'
        });
    }
}
exports.TwillioService = TwillioService;
//# sourceMappingURL=twillio.service.js.map