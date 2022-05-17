import React from 'react'
import Button from '../components/Button'
function PopupItem({title, cover, createdAt, description}) {



  return (
    <div className='blog-wrap'>
    <header>

      <p className='blog-date'>Published {createdAt}</p>
      <h1>{title}</h1>

    </header>
    <img src={cover} alt='cover' />
    <p className='blog-desc'>{description}</p>



  </div>
  )
}

export default PopupItem


