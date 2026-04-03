import {INotifier} from "./good.js";

export class EmailNotifier implements INotifier {
    send(message: string) { console.log(message + " : Email send") }
}