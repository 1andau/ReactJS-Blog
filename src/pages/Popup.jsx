import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../config/data';
import EmptyList from '../components//EmptyList';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Popup = () => {

  // const { id } = useParams();
  // const [blog, setBlog] = useState(null);

  // useEffect(() => {
  //   let blog = blogList.find((blog) => blog.id === parseInt(id));
  //   if (blog) {
  //     setBlog(blog);
  //   }
  // }, []);



  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Goooooo Back</span>
      </Link>

      {/* {blog ? ( */}

      
        <div className='blog-wrap'>
          <header>
            {/* <p className='blog-date'>Published {blog.createdAt}</p> */}
            {/* <h1>{blog.title}</h1> */}
            <div className='blog-subCategory'>
             
             
            </div>
          </header>
          {/* <img src={blog.cover} alt='cover' /> */}
          {/* <p className='blog-desc'>{blog.description}</p> */}




          <div class="comments">

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
      {/* ) : (
        <EmptyList />
      )} */}
    </>
  );
};

export default Popup;
