import { JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import RecommendationService from "../service/RecommendationService";

@JsonController()
export default class UserController {
  recommendationService: RecommendationService;

  constructor() {
    this.recommendationService = new RecommendationService(null);
  }

  @Get("/recommendation")
  getAll() {
    return this.recommendationService.getRecommendation().items;
  }
}