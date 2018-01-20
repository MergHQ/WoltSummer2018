export default class OrderItem {
  id: Number;
  name: String;
  price: Number;
  quantity: Number;

  constructor(obj) {
    Object.assign(this, obj);
  }
}