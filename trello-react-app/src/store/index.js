import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching} from 'redux-batched-actions';

let store = createStore(enableBatching(rootReducer),applyMiddleware(thunk));
export default store;
