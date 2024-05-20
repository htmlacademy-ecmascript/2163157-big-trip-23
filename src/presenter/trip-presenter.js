import { render, RenderPosition } from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/render.js';

import SortView from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/presenter/trip-presenter.js';
import CreateFormView from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/view/create-form-view.js';
import EditFormView from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/view/edit-form-view.js';
import FiltersView from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/view/filters-view.js';
import RoutePointView from '/Users/olmasovarthur/Desktop/IT/Обучение IT/HTML Academy/JS_2/2163157-big-trip-23/src/view/route-point-view.js';

const sortElement = document.querySelector('.trip-events');
const createNewFormElement = document.querySelector('.trip-events');
const editElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-controls__filters');
const pointElement = document.querySelector('.trip-events');

export default class TripPresenter {
  //routePointComponent = new RoutePointView();

  init() {
    render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
    render(new CreateFormView(), createNewFormElement, RenderPosition.BEFOREEND);
    render(new EditFormView(), editElement, RenderPosition.AFTEREND);
    render(new FiltersView(), filterElement, RenderPosition.AFTERBEGIN);

    for (let i = 0; i < 3; i++) {
      render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
    }
  }
}
/*  init() {
    render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
    render(new CreateFormView(), createNewFormElement, RenderPosition.BEFOREEND);
    render(new EditFormView(), editElement, RenderPosition.AFTEREND);
    render(new FiltersView(), filterElement, RenderPosition.AFTERBEGIN);
    render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
    render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
    render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
  }
}
*/
