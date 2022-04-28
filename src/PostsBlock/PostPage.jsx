import React, { useState } from 'react';
import { useParams , Link} from 'react-router-dom';
import { useGetSinglePost } from '../redux/logics';
import { POSTS_URL } from '../redux/constans';
import { EditForm } from './EditBlock';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Button from '../components/Button';
import Header from '../components/Header';

export const PostPage = () => {
  const { postId } = useParams();
  const { blogPost, isLoading, error } = useGetSinglePost(
    POSTS_URL,
    postId
  );

  const [showEditForm, setShowEditForm] = useState(false);

  const { title, description, thumbnail } = blogPost;

  if (isLoading) return <h1>Получаем данные...</h1>;
  if (error) return <h1>{error.message}</h1>;




  const handleEditFormShow = () => setShowEditForm(true);


  return (
    
    <>
        <Header/>

<Link to='/'>
<Button>
<span> Go back</span>
</Button>
</Link>
      
      
 <div className='blog-wrap'>
<header>
<h1>{title}</h1>

</header>
<img src={thumbnail} alt='post' />
<p className='blog-desc'>{description}</p>

<div className='actions'>
  <Button onClick={handleEditFormShow} className='selectBtn'>
    <AutoFixHighIcon />
  </Button>
</div>

{showEditForm && (
  <EditForm setShowEditForm={setShowEditForm} selectedPost={blogPost} />
)}
</div>
    </>


  );
};
