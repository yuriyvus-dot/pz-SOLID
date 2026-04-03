import {PaymentMethod} from "./dip_good.js";

export class PayPalPayment implements PaymentMethod {
    public pay(): void {
        console.log('Paying with paypal');
    }
}