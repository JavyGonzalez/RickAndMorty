import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducer';
//import thunkMiddleware from "redux-thunk";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTEMSION_COMPOSE_ || compose;

const store = createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
