// import React from 'react'
// import Header from '../components/Header';
// import Button from '../components/Button';
// import { AddForm } from '../PostsBlock/AddForm';
// import { useState } from 'react';

// function Account() {

//   const [showAddForm, setShowAddForm] = useState(false);
//   return (
//     <div className='account'>
// <Header/>
// <main id="main" className="flexbox-col-start-center">
// <section class="profile">
//   <header class="header">
//     <div class="details">
//       <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" class="profile-pic"/>
//       <h1 class="heading">Claire Doe</h1>
//       <div class="location">
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//   <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
// </svg>
//         <p>Kochi, India</p>



//       </div>

//   <br />
//       <Button onClick={() => setShowAddForm(true)} className='button_account'>Write post</Button>
//     </div>
//   </header>
// </section>  
// </main>
//  </div>

//   )
// }

// export default Account;



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

<>
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
</>

  );
};

export default Account;