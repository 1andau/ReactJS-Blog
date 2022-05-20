import React from 'react';
import Popup from './Main/BlogPostPage';
import Home from './Main/Home';
import Gallery from './pages/Gallery';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom"
import MainPosts from './Posts/MainPosts';
import PostPage from './Posts/PostPage';
import BlogPostPage from './Main/BlogPostPage';
const App = () => {
  return (
<div className="wrapper">
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route  path="/gallery" element={<Gallery/>}></Route>
  <Route  path="MainPosts" element={<MainPosts/>}></Route>
  <Route path='/posts/:id' element={<PostPage/>}></Route>

  <Route path='/blogPostPage' element={<BlogPostPage/>}></Route>


       
  </Routes>

</div>

  );
};

export default App;







