import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import {POSTS_URL} from './constans'; 
const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => { 

  //createAsyncThunk() : принимает тип операции и функцию, возвращающую промис, и генерирует thunk ,
  // отправляющий типы операции pending/fulfilled/rejected на основе промиса 
  
  const response = await fetch(POSTS_URL); //передаем в fetch константу
  if (response.ok) {     //ok – логическое значение: будет true, если код HTTP-статуса в диапазоне 200-299.

    return await response.json();// читаем ответ в формате JSON
  } else { //иначе
    return new Error('Ошибка при получении постов');
  }
});



export const editPost = createAsyncThunk('posts/editPost', async (updatedPost) => {

  console.log(updatedPost);


  const response = await fetch(POSTS_URL + updatedPost.id, { //сюда передали мокапи 
    method: 'PUT', //будут определять, как будет выполняться операция выборки .
    mode: {//Все это означает, что данные будут отправлены из разных источников. Разные порты на одной машине считаются разными источниками!
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(updatedPost), //мы указываем фактические данные, которые мы отправляем, в переменной body. Мы отправляем строковую версию нашего JSON выше, используя JSON.stringify() . Этот шаг важен, так как он позволяет правильно передавать данные (сервер Python не сможет разобрать объект JavaScript в его исходной форме).
  });

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Ошибка при редактировании поста');
  }
});

export const createNewPost = createAsyncThunk('posts/createNewPost', async(newPost) => {
  const response = await fetch(POSTS_URL, {
    method: 'POST',
    mode: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });

  if (response.ok) {
    return await response.json();
  } else {
    return new Error('Ошибка при создании поста');
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => { //ожидание (pending)
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => { //исполнено (fulfilled):
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {//отклонено (rejected)
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(editPost.fulfilled, (state, action) => { //исправление поста исполнено (fulfilled):
      state.list = [...state.list].map((post) => { //вытащи из стейта пост
        if (post.id === action.payload.id) {  //если post.id  равен action.payload.id
          return action.payload; //то верни 
        }

        return post;
      });
    });
    
    builder.addCase(editPost.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.list = [...state.list, action.payload];
    });
    builder.addCase(createNewPost.rejected, (state, action) => {
      state.error = action.payload;
    });
  }
});

export const postsReducer = postsSlice.reducer;

export const { setPosts } = postsSlice.actions;

export const selectPostsData = (state => state.posts);