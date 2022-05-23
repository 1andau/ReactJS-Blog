import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { database } from '../authorization/firebase';
import { useNavigate } from 'react-router-dom';
import { ModelState, PostIdState } from './RecoilAtom';
import { Avatar } from '@mui/material';
import { useRecoilState } from 'recoil';
import Moment from "react-moment";
import Delete from '@mui/icons-material/Delete';
import Button from '../components/Button';
const Comment = ({post, id}) => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('AuthToken'));
  let userId;
  if (user.displayName!== ""){
      userId = user.uid;
  }else {
      userId = user.localId;
  }
  const [IsOpen,setIsOpen] = useRecoilState(ModelState);
  const [postId,setPostId] = useRecoilState(PostIdState);
  const [comments, setComments] = useState([]);

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

  return (
    <div>
      <Header />

      <div className="post" onClick={() => navigate(`/posts/${id}`)}>
        <div className="post_avatar">
          <Avatar src={post?.userImg} sx={{ width: 50, height: 50 }} />

          <h1>{post?.email}</h1>
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="postHeaderNames">
            <h3 style={{fontWeight: "500"}}>{post?.username}</h3>
                    <p> • <span>
                        <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                        </span> </p>
            </div>
            <div className="post_options">
              </div>
              <div className="post_description">
              <p>{post?.comment}</p>
              </div>
              <div className="post_actop">
              <div className="comment-btn" onClick={(e)=>{
                    e.stopPropagation();
                    setPostId(id);
                    setIsOpen(true);
                }}>

                    {comments.length > 0 && (
                        <span>{comments.length}</span>
                    )}
                </div> 
                 
                {userId === post?.userid ?
                 <div className="delete-btn" onClick={(e)=>{
                    e.stopPropagation();
                    deleteDoc(doc(database,"posts",id));
                }}>
                    <i className='bx bx-trash'></i> 
                </div>: <div className="retweet-btn">
                </div>} 
                
{/* <Button className="button--circle" outline>
<Delete className=''></Delete>
</Button> */}
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
