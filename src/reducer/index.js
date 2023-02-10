import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
// import CategoryReducer from "./CategoryReducer"

const rootReducer=combineReducers({
      auth:AuthReducer,
    //   category:CategoryReducer
});

export default rootReducer;