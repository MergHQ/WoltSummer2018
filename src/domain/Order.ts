import Customer from "./Customer";
import OrderItem from "./OrderItem";

export default class Order {
  customer: Customer;
  id: Number;
  items: OrderItem[];
  restaurant_id: String;
  time_completed: Date;
  time_received: Date;

  constructor(obj) {
    this.customer = new Customer(obj.customer);
    this.id = obj.id;
    this.items = obj.items.map(item => new OrderItem(item));
    this.restaurant_id = obj.restaurant_id;
    this.time_completed = new Date(obj.time_completed * 1000);
    this.time_received = new Date(obj.time_received * 1000);

  }
}