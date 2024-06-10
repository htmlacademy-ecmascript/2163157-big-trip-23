//import { render, RenderPosition } from '../src/render.js';

import TripPresenter from './presenter/trip-presenter.js';

import SortView from './view/sort-view.js';
import CreateFormView from './view/create-form-view.js';
import EditFormView from './view/edit-form-view.js';
import FiltersView from './view/filters-view.js';
import RoutePointView from './view/route-point-view.js';
import { PointModel } from './model/point-model.js';

/*const sortElement = document.querySelector('.trip-events');
const createNewFormElement = document.querySelector('.trip-events');
const editElement = document.querySelector('.trip-events');*/
//const filterElement = document.querySelector('.trip-controls__filters');
const pointElement = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const tripPresenter = new TripPresenter({eventsContainer: pointElement, pointModel});

/*render(new SortView(), sortElement, RenderPosition.AFTERBEGIN);
render(new CreateFormView(), createNewFormElement, RenderPosition.BEFOREEND);
render(new EditFormView(), editElement, RenderPosition.AFTEREND);
render(new FiltersView(), filterElement, RenderPosition.AFTERBEGIN);
render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);
render(new RoutePointView(), pointElement, RenderPosition.BEFOREEND);*/

tripPresenter.init();
