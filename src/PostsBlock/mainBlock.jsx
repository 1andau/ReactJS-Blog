import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { PostPage } from './PostPage';
import Account from '../pages/Account';

export const MainBlock = ({ postsData }) => {

  return (
    <>
      <main >
        <Switch>
          <Route exact path='/blog'>
            <Account title="Posts" {...postsData} />
          </Route>
        
          <Route path="/blog/:postId">
            <PostPage 
            setBlogPosts={postsData.setBlogPosts}
             />
          </Route>

          <Route exact path='/'>
            <Redirect to='/blog' />
          </Route>
        </Switch>
      </main>
    </>
  );
};
