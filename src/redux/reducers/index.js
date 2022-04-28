import  { combineReducers } from 'redux';
import { postsReducer } from '../post';
import blogs from './blog';
import popup from './popup';
import gallery from './gallery';
const rootReducer = combineReducers({
    blogs,
    popup, 
    gallery, 
    posts: postsReducer

});


  export default rootReducer;