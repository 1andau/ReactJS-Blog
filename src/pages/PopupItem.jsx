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
<Button> <span>Send</span></Button>
</form>
<div className="comments__list">
</div>
</div>  
  </div>
  )
}

export default PopupItem


