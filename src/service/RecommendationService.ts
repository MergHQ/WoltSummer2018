import { readFileSync } from "fs";
import Order from "../domain/Order";

export default class RecommendationService {
  orders: Order[];

  constructor(knex) {
    const file = readFileSync('orders.json', 'utf8');
    try {
      this.orders = JSON.parse(file).map(order => new Order(order));
    } catch (e) {
      this.orders = [];
      console.error(e);
    }

  }

  getRecommendation(date = new Date()) {
    let pool = this.orders.filter(item => item.time_received.getDay() === date.getDay() && item.time_received.getHours() == date.getHours());
    return pool[Math.floor(Math.random() * pool.length)];
  }
}