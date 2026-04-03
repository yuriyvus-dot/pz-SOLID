import {PaymentMethod} from "./dip_good.js";

export class Cart {
    public constructor() {
    }
    public pay(payment: PaymentMethod): void {
        payment.pay();
    }
}