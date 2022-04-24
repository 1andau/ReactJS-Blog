import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { fetchBlogs } from '../redux/actions/blog';
import Header from '../components/Header';
import Button from '../components/Button';
const Home = () => {
  const dispatch = useDispatch();

  const items = useSelector(({blogs})=> blogs.items); //map
  const cardItems = useSelector(({popup})=> popup.items); 

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
    <div>
        <Header/>

        <div className="container">
  <div className="search-box">
    <input type="text" placeholder="Enter something...."/>
    <Button type="button"><span>Search</span></Button>
  </div>
</div>
  


<div className="blogList-wrap">




{
items.map((obj) => ( 

<Cards 
ReadMore = {handleAddFavoritesToCart}
key={obj.id}
addedCountFav={cardItems[obj.id] }
{...obj}
   />

   
   ))
 }


    </div>
  </div>
 
    



  );
};

export default Home;
