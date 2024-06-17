import TripPresenter from './presenter/trip-presenter.js';
import PointModel from './model/point-model.js';

const mainElement = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const tripPresenter = new TripPresenter({eventsContainer: mainElement, pointModel});

tripPresenter.init();
