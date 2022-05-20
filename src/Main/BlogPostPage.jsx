import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {clearFavorites} from '../redux/actions/popup'
import Button from '../components/Button';
import Cards from './PostCard';
import PopupItem from './PopupItem';
import Header from '../components/Header';
const PostPage = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(({popup}) => popup); 

  const addedGuides = Object.keys(items).map((key)=>{
    return items [key].items[0]; 
  });

  const onClearFavorites = () => {
          dispatch(clearFavorites()); 

    
  };

return (
  <div className='container'>
<Header/>
    <Link className='blog-goBack' 
      to='/home'>
            <Button onClick={onClearFavorites}> 
            Goooooo back
        </Button>


      </Link>

      <div className='blog-wrap'>

{addedGuides.map((obj) =>(
<PopupItem 
key={obj.id}
id = {obj.id}
title = {obj.title}
createdAt = {obj.createdAt}
cover = {obj.cover} 
description = {obj.description} 
authorName = {obj.authorName}
authorAvatar = {obj.authorAvatar}

/>
))}

</div>
</div>
);




};





export default PostPage;

