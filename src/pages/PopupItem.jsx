import React from 'react'
import Button from '../components/Button'
import Comment from '../Posts/Comment';
function PopupItem({title, cover, createdAt, description}) {



  return (
    <div className='blog-wrap'>
    <header>

      <p className='blog-date'>Published {createdAt}</p>
      <h1>{title}</h1>

    </header>
    <img src={cover} alt='cover' />
    <p className='blog-desc'>{description}</p>


<Comment/> 
  </div>
  )
}

export default PopupItem


