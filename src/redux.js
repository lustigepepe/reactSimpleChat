import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './containers/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

function getStore() {
    return (compose(
        applyMiddleware(thunk, logger),
    )(createStore)(Reducers, {}));
}

export const store = getStore();
