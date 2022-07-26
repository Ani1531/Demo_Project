import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LoaderReducer from './Reducers/LoaderReducer';
import MenuReducer from './Reducers/MenuReducer';

const rootReducer = combineReducers({LoaderReducer, MenuReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
