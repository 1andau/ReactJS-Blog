import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { database } from '../authorization/firebase';
import AddPosts from './AddPosts';
// import Posts from './AddPosts';
import Header from '../components/Header';
import Posts from './Posts';

function MainPosts() {
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(database, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPost(snapshot.docs);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [database]);

  const [posts, setPost] = useState([]);

  return (

<div className="container">
<div className="taskManager">
      <Header />
      
      <div className="taskManager__container">

          <AddPosts />
          {posts.map((el) => (
            <Posts key={el.id} id={el.id} post={el.data()} />
          ))}

        </div>
      </div>
</div>
  );
}

export default MainPosts;
