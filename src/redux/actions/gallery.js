import axios from 'axios'; 

export const fetchGallery = () => (dispatch) => {
   console.log();
 
    dispatch({
       type: 'SET_LOADED_GALLERY',
       payload: false,    
 });
 
    axios.get("http://localhost:3001/gallery").then(({data}) => {
 dispatch(setGallery(data));
    });  
 };
 
 export const setGallery = (items) => ({ 
    type: 'SET_GALLERY', 
    payload: items, 
 });



