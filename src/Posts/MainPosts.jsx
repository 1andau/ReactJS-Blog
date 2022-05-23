import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { database } from '../authorization/firebase';
import AddPosts from './AddPosts';
// import Posts from './AddPosts';
import Header from '../components/Header';
import Posts from './Posts';
import {useRecoilState} from 'recoil'
import { ModelState } from './RecoilAtom';
import { CommentModel } from './CommentModel';

function MainPosts() {
  const [IsOpen,setIsOpen] = useRecoilState(ModelState);


  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(database, 'posts'), orderBy('timestamp', 'desc', 'email')),
      (snapshot) => {
        setPost(snapshot.docs);
      },
    );

    
    return () => {
      unsubscribe();
    };
  }, [database]);

  const [posts, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  return (
    <div className="container">
      <div className="taskManager">
        <Header />

        <div className="taskManager__container">
          <AddPosts />

          {posts.map((el) => (
            <Posts key={el.id} id={el.id} post={el.data()} />
          ))}

{IsOpen && <CommentModel/>}

        </div>
      </div>
    </div>
  );
}

export default MainPosts;
