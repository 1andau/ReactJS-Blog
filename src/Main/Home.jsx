import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './PostCard';
import { fetchBlogs } from '../redux/actions/blog';
import Header from '../components/Header';
const Home = () => {

  const dispatch = useDispatch();

  const items = useSelector(({blogs})=> blogs.items); //map

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
<>
<Header/>




    <div className='container'>

<div className="blogList-wrap">

{
items.map((obj) => ( 

<Cards 
ReadMore = {handleAddFavoritesToCart}
key={obj.id}
addedCountFav={items[obj.id] }
{...obj}
   />

   
   ))
 }


    </div>
  </div>
</>

    



  );
};

export default Home;
