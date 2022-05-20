import axios from 'axios'; 

export const fetchBlogs = () => (dispatch) => {
 
    dispatch({
       type: 'SET_LOADED',
       payload: false,    
 });
 
    axios.get("https://6283ee0438279cef71de493c.mockapi.io/blogs")
    .then(({data}) => {
 dispatch(setBlogs(data));
    });  
 };
 
 export const setBlogs = (items) => ({ 
    type: 'SET_BLOGS', 
    payload: items, 
 });
 
