import React from 'react';
import Popup from './pages/Popup';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { MainBlock } from './PostsBlock/mainBlock';
import {POSTS_URL} from './redux/constans';
import {useFetchPosts} from './redux/logics';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom"
import Account from './pages/Account';
import MainPosts from './Posts/MainPosts';

const App = () => {

  // const postsData = useFetchPosts(POSTS_URL);
  // const blogPostRoutes = postsData.blogPosts.map((post) => {
  //   return `/blog/${post.id}`;
  // });





  return (
<div className="wrapper">
  <Routes>
  <Route  path="/" element={<Main/>}></Route>
  <Route  path="/home" element={<Home/>}></Route>
  <Route  path="/popup" element={<Popup/>}></Route>
  <Route  path="/gallery" element={<Gallery/>}></Route>
  <Route  path="MainPosts" element={<MainPosts/>}></Route>
  <Route  path="/account" element={<Account/>}></Route>
  <Route path='/posts' element={<Main/>}></Route>


        {/* <Route path='/' blogPostRoutes={blogPostRoutes}>
          <MainBlock postsData={postsData} />
        </Route> */}
  </Routes>

</div>

  );
};

export default App;



