import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import PopupItem from './PopupItem';
import {clearFavorites} from '../redux/actions/popup'


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

    <Link className='blog-goBack' 
      to='/'>
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






 <div className="comments">

<h2>Leave a comment</h2>

<form className="comments__form">
  <div className="comments__form-info">

    <div className="comments__form-field">
      <input id="comments__form-label-name" name="author" placeholder="Name" type="text" className="comments__form-input"/>
      <label className="comments__form-label" for="comments__form-label-name">
        <span className="comments__form-label-text">Name</span>
      </label>
    </div>
  </div>

  <div className="comments__form-text">
    
    <div className="comments__form-field">
      <textarea id="comments__form-label-text" name="author" placeholder="Express your thoughts" type="text" className="comments__form-input comments__form-textarea"></textarea>
      <label className="comments__form-label" for="comments__form-label-text">
        <span className="comments__form-label-text">Express your thoughts</span>
      </label>
    </div>

  </div>
<Button> Send</Button>
</form>
<div className="comments__list">
</div>
</div>  


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

