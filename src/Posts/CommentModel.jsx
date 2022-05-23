import { useRecoilState } from "recoil";
import { ModelState, PostIdState } from './RecoilAtom';
import { useEffect, useState } from "react";
import { onSnapshot, doc, addDoc, collection, serverTimestamp } from '@firebase/firestore';
import Moment from "react-moment";
import { database } from "../authorization/firebase";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(() => ({

}));

const BootstrapDialogTitle = ({children, onClose}) => {

  return (
    <DialogTitle>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};


export const CommentModel = () => {
  const user = JSON.parse(sessionStorage.getItem('AuthToken'));
let username;
let userImg;
let userEmail;
if (user.displayName !== ""){
  username = user.displayName;
  userImg = user.photoURL;
  userEmail = user.email;
}else {
  username = user.email.split("@")[0];
  userImg = "";
}
const [IsOpen, setIsOpen] = useRecoilState(ModelState);
const [postId, setPostId] = useRecoilState(PostIdState);
const [post, setPost] = useState();
const [comment, setComment] = useState("");
useEffect(
  () =>
    onSnapshot(doc(database, "posts", postId), (snapshot) => {
      setPost(snapshot.data());
    }),
  [database]
);

const sendComment = async (e) => {
  e.preventDefault();

  await addDoc(collection(database, "posts", postId, "comments"), {
    comment: comment,
    username: username,
    userImg: userImg,
    userEmail: userEmail,
    timestamp: serverTimestamp(),
  });

  setIsOpen(false);
  setComment("");
};
console.log(post);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (


<>
<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={IsOpen}
      >
<Button onClick={handleClose}>
    <CloseIcon/>
  </Button>
  <DialogContent>
    <div className="creator-div">
      <div className="creator-info">
        <div className="creator-img">
          {post?.userImg == "" ?  <Avatar sx={{ width: 50, height: 50 }}/> : <img style={{ width: 60, height: 60 }} src={post?.userImg} alt="" />}
           <p>{user?.userEmail}</p>

        </div>
        <div className="creator-name-div">
          <div className="creator-name-info">
          <h6>@{post?.email}</h6>
            <p> • <Moment fromNow>{post?.timestamp?.toDate()}</Moment></p>
          </div>


          <div className="creator-post">
            <p>{post?.caption}</p>
          </div>
        </div>
      </div>

      <div className="creator-tag">
        <p>Reply to <span>@{user?.email} </span></p>
      </div>
    </div>
          {/* ============================================================= */}

    <div className="user-div">
      <div className="user-img-div">
        {user.displayName !== "" ? <img sx={{ width: 50, height: 50 }} src={user.photoURL} alt="" /> : <Avatar sx={{ width: 50, height: 50 }}/> }
      </div>
      <div className="reply">
        <textarea name="" id="" cols="30" rows="10" placeholder=" comment" onChange={(e)=> setComment(e.target.value)}/>
      </div>
    </div>
    <div className="icons-div">
    
      <div>
      <Button disabled={!comment.trim()} onClick={sendComment}>Send</Button>
      </div>
    </div>
  </DialogContent>
  </BootstrapDialog>
</>
   
  );
}