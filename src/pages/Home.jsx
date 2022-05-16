import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { fetchBlogs } from '../redux/actions/blog';
import Header from '../components/Header';
import Button from '../components/Button';
const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({blogs})=> blogs.items); //map
  const cardItems = useSelector(({popup})=> popup.items); 


const [value, setValues] = useState(''); 
  React.useEffect(() => {
    dispatch(fetchBlogs());
     }, []);
    
     const handleAddFavoritesToCart = (obj) => {
      dispatch({
        type: 'ADD_FAVORITES_TO_CART', 
      payload: obj,
      });
      };



  return (
    <div className='container'>
        <Header/>


  


<div className="blogList-wrap">
{
items

.map((obj) => ( 

<Cards 
ReadMore = {handleAddFavoritesToCart}
key={obj.id}
addedCountFav={cardItems[obj.id] }
{...obj}
   />

   
   ))
 };


    </div>
  </div>
 
    



  );
};

export default Home;
