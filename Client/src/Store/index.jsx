import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


//import Reducers from Store to CombineReducers
import UserAuthReducer from './Reducers/UserAuthReducer';
import ScreamsReducer from './Reducers/ScreamReducer';


//Initialization State
const initialState = {};

//Apply redux-Thunk MiddleWare
const middleware = [thunk];


//Combinde Reducers
const reducers = combineReducers({
    auth: UserAuthReducer,
    screams: ScreamsReducer
});

//Compose Enhancer To Redux Developer tools Ext Checking
const composeEnhancers = 
          typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;