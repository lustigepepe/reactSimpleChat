import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import Reducers from './containers/reducers';
import rootEpic from './containers/observable/epics';

const logger = createLogger();
const epicMiddleware = createEpicMiddleware();

function getStore() {
    return (compose(
        applyMiddleware(thunk, logger, epicMiddleware),
        )(createStore)(Reducers, {}));
    }
    const store = getStore();
    epicMiddleware.run(rootEpic);
    export default store;
