import {INotifier} from "./good.js";

export class SmsNotifier implements INotifier {
    send(message: string) { console.log(message + " : SMS send")}
}