import { render } from '../render.js';
import SortView from '../view/sort-view.js';
import CreateFormView from '../view/create-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import FiltersView from '../view/filters-view.js';
import RoutePointView from '../view/route-point-view.js';

export default class TripPresenter {
  pointComponent = new RoutePointView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }


  init() {
    render(new SortView(), this.eventsContainer);
    render(this.pointComponent, this.eventsContainer);
    render(new EditFormView(), this.pointComponent.getElement());
    render(new FiltersView(), this.eventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new RoutePointView(), this.pointComponent.getElement());
    }

    render(new CreateFormView(), this.pointComponent.getElement());
  }
}
