import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { PostPage } from './PostPage';
import {Link } from 'react-router-dom';
import Account from '../pages/Account';
import { useNavigate } from 'react-router-dom';

export const MainBlock = ({ postsData }) => {
const navigate =  useNavigate();
  return (
    <>
      <main>
        {/* <Routes> */}
          
          {/* <Route exact path="/blog">
            <Account title="Posts" {...postsData} />
          </Route> */}

        
          <div className="" onClick={()=> navigate('/blog')}>
          <Account title="Posts" {...postsData} />
        </div>

          {/* <Route path="/blog/:postId">
            <PostPage setBlogPosts={postsData.setBlogPosts} />
          </Route> */}

          <div className="" onClick={()=> navigate("/blog/:postId")}>
          <PostPage setBlogPosts={postsData.setBlogPosts} />
        </div>
        

          {/* <Route exact path="/"> */}
            {/* <Link to='/blog' /> */}
            <div className="profile_back_arrow" onClick={()=> navigate('/blog')}></div>


          {/* </Route> */}
          <div className="" onClick={()=> navigate("/blog")}> </div>

        {/* </Routes> */}
      </main>
    </>
  );
};
