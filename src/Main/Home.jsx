import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './PostCard';
import { fetchBlogs } from '../redux/actions/blog';
import Header from '../components/Header';
import LoadingBlock from '../pages/LoadingBlock';

const Home = () => {

  const dispatch = useDispatch();

  const items = useSelector(({blogs})=> blogs.items); //map
  const isLoaded = useSelector(({blogs})=> blogs.isLoaded);

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

{ isLoaded
 ? items.map((obj) => ( 

<Cards 
ReadMore = {handleAddFavoritesToCart}
key={obj.id}
addedCountFav={items[obj.id] }
{...obj}
   />
   )) :
   Array(10)
   .fill(0)
   .map((_,index) => 
   <LoadingBlock key ={index}/>
 )}


    </div>
  </div>
</>

    



  );
};

export default Home;
