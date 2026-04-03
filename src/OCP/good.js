import { EmailNotifier } from "./EmailNotifier.js";
import { SmsNotifier } from "./SmsNotifier.js";
const email = new EmailNotifier();
email.send("Hello");
const sms = new SmsNotifier();
sms.send("Hello!");
//# sourceMappingURL=good.js.map