import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from './cartReducer';
import mainListFlowersReducer from './mainListFlowersReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    mainListFlowers: mainListFlowersReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;