import { Avatar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment'
import Button from '../components/Button';
import {useState} from 'react'; 
import {database} from '../authorization/firebase'; 
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import DeleteIcon from '@mui/icons-material/Delete';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

function Posts({post, id , caption}) {
    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem('AuthToken'));
    let userId;
    if (user.displayName!== ""){
        userId = user.uid;
    }else {
        userId = user.localId;
    }
  
    
  const handleDelete = async () => {
    const taskDocRef = doc(database, 'posts', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }




  return (
<>
<div className='post' onClick={()=>navigate(`/posts/${id}`)}>
     <div className="post_avatar">
            <Avatar src={post?.userImg} sx={{ width: 50, height: 50 }}/>
        </div>
        <div className="post_body">
            <div className="post_header">
                <div className="post_headerNames">
                    <h3>{post?.username}</h3>
                    <p> • <span>
                        <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                        </span> </p>
                </div>
                <div className="post_options">
              </div>
            </div>
            
            {post?.image === undefined ? <>
            <div className="post_description">
                <h2> {post?.title}</h2>
                <p style={{marginBottom: "2rem"}}>{post?.caption}</p>

            </div>
            </> : <>
            <div className="post_description">
            <h2> {post?.title}</h2>
                <p>{post?.caption}</p>
            </div>
            <div className="post_image">
                <img src={post?.image} alt="" />
            </div>
            </>}
            </div>

</div>

<div className="icons">
<Button className="button--circle" outline>
<DeleteIcon className='' onClick={handleDelete}></DeleteIcon>
</Button>

<Button className="button--circle" outline>
  <CommentsDisabledIcon></CommentsDisabledIcon>
</Button>
</div>
</>
  )
}

export default Posts