import { Order } from "./liskov_good.js";
export class ConfirmedOrder extends Order {
    payed;
    markAsPaid() {
        this.payed = true;
    }
}
//# sourceMappingURL=ConfirmedOrder.js.map