import React, { useState } from 'react';
import {createNewPost} from '../redux/post';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import CloseIcon from '@mui/icons-material/Close';

const CreatePopup = ({ setShowAddForm, blogPosts }) => {

  const [postTitle, setPostTitle] = useState('');
  const [postDesc, setPostDesc] = useState('');

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value)
  }

  const dispatch = useDispatch();

  const handleCreatePost = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle,
      description: postDesc,
      thumbnail: blogPosts[0]?.thumbnail || 'https://img.freepik.com/free-photo/astronaut-in-neon-space-closeup-bright-rays-of-neon-fly-by-d-illustration_250994-3474.jpg',
    }
    dispatch(createNewPost(newPost))
      .finally(() => setShowAddForm(false));
  }

  return (
    <>
      <form className='editPostForm' onSubmit={handleCreatePost}>
        <Button  className='button--circle' onClick={() => setShowAddForm(false)}>
          <CloseIcon />
        </Button>
        <h2>Создание поста</h2>
        <div>
          <input
            className='editFormInput'
            type='text'
            name='postTitle'
            placeholder='Заголовок поста'
            value={postTitle}
            onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className='editFormInput'
            name='postTitle'
            placeholder='Описание поста'
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <Button type='submit'>
            Добавить пост
          </Button>

        </div>
      </form>
      <div onClick={() => setShowAddForm(false)} className="overlay"></div>
    </>
  );
};

export default CreatePopup;