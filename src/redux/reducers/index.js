import  { combineReducers } from 'redux';
import blogs from './blog';
import popup from './popup';
import gallery from './gallery';
const rootReducer = combineReducers({
    blogs,
    popup, 
    gallery, 

});


  export default rootReducer;