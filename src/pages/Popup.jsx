import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import PopupItem from './PopupItem';
import {clearFavorites} from '../redux/actions/popup'
import Header from '../components/Header';

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

    <Link className='button_account' 
      to='/' onClick={onClearFavorites}>
            Goooooo back


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




const mapStateToProps = (items, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: items.posts.find(post => post.id === id)
  }
}

export default Popup;

