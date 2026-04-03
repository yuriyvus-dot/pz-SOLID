import {PaymentMethod} from "./dip_good.js";

export class CreditCardPayment implements PaymentMethod {
    public pay(): void {
        console.log('Paying with credit card');
    }
}
