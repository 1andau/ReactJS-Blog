import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Posts from './Posts'
import { onSnapshot, collection, query, orderBy,doc } from "@firebase/firestore";
import { database } from '../authorization/firebase';
import { useParams } from 'react-router-dom';
import Comment from './Comment';


const PostPage = () => {
const {id} = useParams();
const [post, setPost] = useState(); 
const [comments, setComments] = useState([]);


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
        ),
        (snapshot) => setComments(snapshot.docs)
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

{comments.length > 0 && (
            <div>
                {comments.map((obj)=>{
                    return <Comment key={obj.id} id={obj.id} post={obj.data()}/>
                })}
            </div>
        )}
</div>


    </div>
  )
}

export default PostPage