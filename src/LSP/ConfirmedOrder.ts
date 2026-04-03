import {Order} from "./Order.js";

export class ConfirmedOrder extends Order {
    payed: boolean;
    markAsPaid(): void {
        this.payed = true;
    }
}