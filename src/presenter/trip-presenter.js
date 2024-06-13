import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FiltersView from '../view/filters-view.js';
import PointView from '../view/point-view.js';
//import { points } from '../mock/points.js';

export default class TripPresenter {
  sortComponent = new SortView();

  constructor({eventsContainer, pointModel}) {
    this.eventsContainer = eventsContainer;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();

    render(this.sortComponent, this.eventsContainer);
    render(new PointView(), this.eventsContainer.getElement());
    render(new EditFormView(), this.pointComponent.getElement());
    render(new FiltersView(), this.eventsContainer);
    render(new CreateFormView(), this.pointComponent.getElement());


    points.forEach((point) => {
      render(new PointView(point, destinations), this.pointComponent.getElement());
    });

    //render(new CreateFormView(), this.pointComponent.getElement());
  }
}
