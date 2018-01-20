import 'reflect-metadata';
import {createExpressServer} from "routing-controllers";
import { readFileSync } from 'fs';
import Order from './domain/Order';

import * as express from 'express';

import RecommendationController from './controller/RecommendationController';

const file = readFileSync('orders.json', 'utf8');

let orders: Order[];

try {
  orders = JSON.parse(file).map(order => new Order(order));
} catch (e) {
  orders = [];
  console.error(e);
}

console.log(orders.length);

let app: express.Application;

app = createExpressServer({
  controllers: [RecommendationController]
});

app.listen(3000);