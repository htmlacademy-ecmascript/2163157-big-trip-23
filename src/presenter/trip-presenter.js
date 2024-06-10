import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FiltersView from '../view/filters-view.js';
import RoutePointView from '../view/route-point-view.js';
//import { points } from '../mock/points.js';

export default class TripPresenter {
  sortComponent = new SortView();
  pointComponent = new RoutePointView();

  constructor({eventsContainer, pointModel}) {
    this.eventsContainer = eventsContainer;
    this.pointModel = pointModel;
  }


  init() {
    const points = this.pointModel.getPoints();
    render(this.sortComponent, this.eventsContainer);
    render(this.pointComponent, this.eventsContainer);
    render(new EditFormView(), this.pointComponent.getElement());
    render(new FiltersView(), this.eventsContainer);
    render(new CreateFormView(), this.pointComponent.getElement());

    points.forEach((point) => {
      render(new RoutePointView(point), this.pointComponent.getElement());
    });

    //render(new CreateFormView(), this.pointComponent.getElement());
  }
}
