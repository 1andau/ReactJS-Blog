
import React from 'react'
import Header from '../components/Header';
import Button from '../components/Button';
import { CreatePopup } from '../PostsBlock/CreatePopup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts,selectPostsData} from '../redux/post';
import { useEffect } from 'react';
import { EditForm } from '../PostsBlock/EditBlock';
import { Post } from '../PostsBlock/PostCard';
import AddPostButton from '../PostsBlock/AddPostButton';

const Account = () => {
  
  const { list: posts, isLoading, error } = useSelector(selectPostsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);




  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Получаем данные...</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (

<div className='container'>
<Header/>

<AddPostButton
  title={'Posts'}
  blogPosts={posts}
/>
<div className='blogList-wrap'>



  {posts.map((post, pos) => {
    return (
      <Post
        {...post}
        selectPost={() => selectPost(post)}
        key={post.id}
      />
    );
  })}

{showEditForm && (
  <EditForm
    selectedPost={selectedPost}
    setShowEditForm={setShowEditForm}
  />
)}
</div>
</div>

  );
};

export default Account;