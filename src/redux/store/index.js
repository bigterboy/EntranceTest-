import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import reducers from '../reducers';
const middlewares = [thunk, logger];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
