import { destinations } from '../mock/destinations';
import { points } from '../mock/points';

export default class PointModel {
  constructor() {
    this.points = [];
    this.destinations = [];
  }

  init() {
    this.points = points;
    this.destinations = destinations;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }
}
