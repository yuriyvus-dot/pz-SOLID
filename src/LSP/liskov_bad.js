class Order {
    id;
    items;
    payed;
    // constructor
    markAsPaid() {
        this.payed = true;
    }
}
class DraftOrder extends Order {
    markAsPaid() {
        throw new Error("Draft orders can't be payed");
    }
}
const order = new Order();
const order1 = new Order();
const order2 = new Order();
const draftorder = new DraftOrder();
const mas = [order, draftorder, order2, order1];
mas.forEach(o => {
    o.markAsPaid();
    console.log(o.payed);
});
export {};
//# sourceMappingURL=liskov_bad.js.map