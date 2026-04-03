import {EmailNotifier} from "./EmailNotifier.js";
import {SmsNotifier} from "./SmsNotifier.js";

export  interface INotifier {
    send(message: string): void;
}





const email = new EmailNotifier();
email.send("Hello");

const sms = new SmsNotifier();
sms.send("Hello!");