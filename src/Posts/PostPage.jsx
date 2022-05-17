import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Posts from './Posts'
import { onSnapshot, collection, query, orderBy,doc } from "@firebase/firestore";
import { database } from '../authorization/firebase';
import { useParams } from 'react-router-dom';

const PostPage = () => {
const {id} = useParams();
const [post, setPost] = useState(); 

useEffect(
    () =>
      onSnapshot(doc(database, "posts", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [database]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(database, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        )
      ),
    [database, id]
  );
  console.log(post,id);

  return (
    <div className='container'>
<Header/>

<div className="postpage">
    <Posts key={id}
    id={id}
    post={post} />
</div>


    </div>
  )
}

export default PostPage