import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FiltersView from '../view/filters-view.js';
import PointView from '../view/point-view.js';
//import { points } from '../mock/points.js';
//import { destinations } from '../mock/points.js';

export default class TripPresenter {
  sortComponent = new SortView();
  filterComponent = new FiltersView();

  constructor({eventsContainer, pointModel}) {
    this.eventsContainer = eventsContainer;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();

    render(this.sortComponent, this.eventsContainer);
    render(this.filterComponent, this.eventsContainer);
    render(new EditFormView(), this.eventsContainer);
    render(new CreateFormView(), this.eventsContainer);

    points.forEach((point) => {
      render(new PointView(point, destinations), this.eventsContainer);
    });
  }
}
