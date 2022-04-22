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
    ReadMore({title, createdAt, authorName, id, description,authorAvatar, cover, authorName, authorAvatar  })
  
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

        <svg width="80" height="80" viewBox="0 0 108 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 50H93M93 50L62.1654 20M93 50L62.1654 80" stroke="#BF00C2" stroke-width="12"/>
        </svg>
       
        
          
        </Link> 
        

      </footer>
    </div>
  
  );
};

export default Cards;





