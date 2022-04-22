import  { combineReducers } from 'redux';

import blogs from './blog';
import popup from './popup';

const rootReducer = combineReducers({
    blogs,
    popup, 
  

  });

  export default rootReducer;