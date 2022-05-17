import React from 'react';
import Popup from './pages/Popup';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom"
import MainPosts from './Posts/MainPosts';
import PostPage from './Posts/PostPage';

const App = () => {




  return (
<div className="wrapper">
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route  path="/popup" element={<Popup/>}></Route>
  <Route  path="/gallery" element={<Gallery/>}></Route>
  <Route  path="MainPosts" element={<MainPosts/>}></Route>
  <Route path='/posts/:id' element={<PostPage/>}></Route>


       
  </Routes>

</div>

  );
};

export default App;



