import axios from 'axios'; 

export const fetchBlogs = () => (dispatch) => {
   console.log();
 
    dispatch({
       type: 'SET_LOADED',
       payload: false,    
 });
 
    axios.get("http://localhost:3001/blogs").then(({data}) => {
 dispatch(setBlogs(data));
    });  
 };
 
 export const setBlogs = (items) => ({ 
    type: 'SET_BLOGS', 
    payload: items, 
 });
 
