import React from 'react';
import Cards from './Cards';


const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      
      {blogs.map((blog) => (
        <Cards blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
