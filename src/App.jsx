import React from 'react';
import {  Route} from 'react-router-dom';
import Popup from './pages/Popup';
import Home from './pages/Home';
import Account from './pages/Account';
import Gallery from './pages/Gallery';
import Signin from './pages/Signin';
import { MainBlock } from './PostsBlock/mainBlock';
import {POSTS_URL} from './redux/constans';
import {useFetchPosts} from './redux/logics';


const App = () => {
  const postsData = useFetchPosts(POSTS_URL);
  const blogPostRoutes = postsData.blogPosts.map((post) => {
    return `/blog/${post.id}`;
  });


  return (
    <div className='container'>
        <Route path='/home' exact component={Home} />
        <Route path='/popup' component={Popup} />
        <Route path='/account' exact component={Account} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/signin' exact component={Signin} />

        <Route path='/' blogPostRoutes={blogPostRoutes}>
          <MainBlock postsData={postsData} />
        </Route>
    </div>
  );
};

export default App;



