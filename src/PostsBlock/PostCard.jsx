import React from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export const Post = ({
  id,
  title,
  description,
  thumbnail,
  selectPost
}) => {


  const finalDescription = (
    <p>
      {description.length > 100 ? (
        <>
          {description.slice(0, 101)}...
        </>
      ) : (
        description
      )}
     
    </p>
  );

  return (

      
    <div className='blogItem-wrap'>
    <Link to={`/blog/${id}`}>
    <img className='blogItem-cover' src={thumbnail} alt='cover' />
    </Link>
    <h3>{title}</h3>
    <p className='blogItem-desc'>{finalDescription}</p>
    <footer>
     
     <Link className='blogItem-link' to={`/blog/${id}`}>

      <svg width="100" height="38" viewBox="0 0 121 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M121 29L71 0.132493L71 57.8675L121 29ZM-4.37114e-07 34L76 34L76 24L4.37114e-07 24L-4.37114e-07 34Z" fill="#BB3395"/>
  </svg>
        </Link> 

        <Button onClick={selectPost} className='selectBtn'>
            <AutoFixHighIcon />
          </Button>
    </footer>
    </div> 
        

    );
  };
