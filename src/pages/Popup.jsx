import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PopupItem from './PopupItem';
import {clearFavorites} from '../redux/actions/popup'
import Header from '../components/Header';
import Button from '../components/Button';
function Popup () {

  const dispatch = useDispatch();
  const {items} = useSelector(({popup}) => popup); 

  const addedGuides = Object.keys(items).map((key)=>{
    return items [key].items[0]; 
  });

  const onClearFavorites = () => {
          dispatch(clearFavorites()); 

    
  };
  
  return (
    <>
        <Header/>

    <Link className='' 
      to='/home' onClick={onClearFavorites}>
<Button>
<span> Go back</span>
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
    
    </>
  );
};





export default Popup;

