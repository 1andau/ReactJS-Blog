import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { fetchBlogs } from '../redux/actions/blog';


const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({blogs})=> blogs.items); //map

  React.useEffect(() => {
    dispatch(fetchBlogs());
     }, []);
    
    
 

  return (
    <div>

<div className="blogList-wrap">
     
{
items.map((obj) => ( 

<Cards 
 key={obj.id}
 {...obj}
   />

   
   ))
 }


    </div>
  </div>
 
    



  );
};

export default Home;
