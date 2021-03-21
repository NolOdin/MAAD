import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReduсer from './redusers';


export default () => {
	const store = createStore(rootReduсer, applyMiddleware(logger));
	return store;
}
