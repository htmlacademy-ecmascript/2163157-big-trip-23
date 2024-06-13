import TripPresenter from './presenter/trip-presenter.js';
import PointModel from './model/point-model.js';

const filterElement = document.querySelector('.trip-controls__filters');
const mainElement = document.querySelector('.trip-events');

const pointModel = new PointModel();
pointModel.init();

const tripPresenter1 = new TripPresenter({eventsContainer: mainElement, pointModel});
const tripPresenter2 = new TripPresenter({eventsContainer: filterElement, pointModel});

tripPresenter1.init();
tripPresenter2.init();
