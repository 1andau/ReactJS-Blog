import React from 'react';
import { Link } from 'react-router-dom';

function Cards( {   
   description,
  title,
  createdAt,
  authorName,
  authorAvatar,
  cover,
  id,
  ReadMore, 

}) {


    const onClickReadMore = () => {
    ReadMore({title, createdAt, id, description, cover, authorName, authorAvatar  })
  
    }

  return (
    
    <div className='blogItem-wrap'>
      <Link to = '/popup'  onClick={onClickReadMore}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      </Link>
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
       <Link className='blogItem-link' to='/popup'
        onClick={onClickReadMore}>

<svg width="100" height="38" viewBox="0 0 121 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M121 29L71 0.132493L71 57.8675L121 29ZM-4.37114e-07 34L76 34L76 24L4.37114e-07 24L-4.37114e-07 34Z" fill="#BB3395"/>
</svg>
        </Link> 
     </footer>
    </div>
  
  );
};

export default Cards;





