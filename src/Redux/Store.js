import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoaderReducer from './Reducers/LoaderReducer';

const rootReducer = combineReducers({LoaderReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
