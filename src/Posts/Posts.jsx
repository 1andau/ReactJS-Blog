import { Avatar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment'
import Button from '../components/Button';
import {useState, useEffect} from 'react'; 
import {database} from '../authorization/firebase'; 
import DeleteIcon from '@mui/icons-material/Delete';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { useRecoilState } from "recoil";
import { ModelState, PostIdState } from './RecoilAtom';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';


function Posts({post, id }) {
    const navigate = useNavigate();
    const [postId, setPostId] = useRecoilState(PostIdState);
const [comments, setComments] = useState([]); 
const [IsOpen,setIsOpen] = useRecoilState(ModelState);

    const user = JSON.parse(sessionStorage.getItem('AuthToken'));
    let userId;
    if (user.displayName!== ""){
        userId = user.uid;
        
    }else {
        userId = user.localId;
    }
  
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
    <>
      <div className="post" onClick={() => navigate(`/posts/${id}`)}>
        <div className="post_avatar">
          <Avatar src={post?.userImg} sx={{ width: 50, height: 50 }} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerNames">
              <h3>{post?.username}</h3>
              <p>
                <span>
                  <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
                </span>{' '}
              </p>
            </div>

            <div className="post_options"></div>
          </div>

          {post?.image === undefined ? (
            <>
              <span className="email">{post?.email}</span>

              <div className="post_description">
                <h2> {post?.title}</h2>
                <p style={{ marginBottom: '2rem' }}>{post?.caption}</p>
              </div>
            </>
          ) : (
            <>
              <div className="post_description">
                <h2> {post?.title}</h2>
                <p>{post?.caption}</p>
              </div>
              <div className="post_image">
                <img src={post?.image} alt="" />
              </div>
            </>
          )}
   {/* ===========================comments post============================ */}

          <div className="post_actions">
            <div
              className="comment-btn"
              onClick={(e) => {
                e.stopPropagation();
                setPostId(id);
                setIsOpen(true);
              }}>
              <Button className="button--circle" outline>
                <CommentsDisabledIcon></CommentsDisabledIcon>
              </Button>
              {comments.length > 0 && <span>{comments.length}</span>}
            </div>


      {/* ===========================delete post============================ */}

            <div
              className=""
              onClick={(e) => {
                if (window.confirm('delete post?')) {
                  e.stopPropagation();
                  deleteDoc(doc(database, 'posts', id));
                }
              }}>
              <Button className="button--circle" outline>
                <DeleteIcon></DeleteIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts