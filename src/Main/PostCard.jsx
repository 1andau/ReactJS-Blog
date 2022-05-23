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
    
    <div  className='blogItem-wrap'>
      <Link to = '/blogPostPage'  onClick={onClickReadMore}>
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

 
 
        

      </footer>
    </div>
  
  );
};

export default Cards;





