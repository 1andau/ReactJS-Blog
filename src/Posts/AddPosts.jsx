import React from 'react';
import {database, storage} from '../authorization/firebase';
import { useRef, useState } from 'react';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { Avatar } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import Button from '../components/Button';

function AddPosts({}) {
    //initialize the user
  const user = JSON.parse(sessionStorage.getItem('AuthToken'));
  let userid;
  let name;
  let userimg;
  if (user.displayName !== '') {
    userid = user.uid;
    name = user.displayName;
    userimg = user.photoURL;
  } else {
    userid = user.localId;
    name = user.email.split('@')[0];
    userimg = '';
  }

  const [loading, setLoading] = useState(false);
  const fileref = useRef(null);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState('');
  const [subtitle, setSubtitle] = useState(''); 

  const addImage = (e) => {
    const reader = new FileReader(); //асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя
    if (e.target.files[0]) {
      //ccылка на файл [0] пока пусто
      reader.readAsDataURL(e.target.files[0]); //чтение FileReader
    }
    reader.onload = (readerEvent) => {
      //показать на экране картинку
      setFile(readerEvent.target.result);
    };
  };
  const postSend = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(database, 'posts'), {
      userid: userid,
      username: name,
      userImg: userimg,
      caption: input,
      title: subtitle,
      timestamp: serverTimestamp(),
    });
    const imgRef = ref(storage, `posts/${docRef.id}/image`);

    if (file) {
      await uploadString(imgRef, file, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imgRef);
        await updateDoc(doc(database, 'posts', docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput('');
    setSubtitle('');
    setFile(null);
  };

  return (
    <>


      {/* <div className='container'> */}
        {!loading && (
            <>
         <div className='tweet_input'>
            <Avatar src={user.photoURL} sx={{ width: 50, height: 50, display: "flex", alignItems: "center",justifyContent: "center" }}/>
            <div className='input-box'>

            <input 
            className='title_input'
          value={subtitle}
          placeholder='Enter title'
          onChange={(e) => setSubtitle(e.target.value)} 
          />

          <textarea
           value={input}
           placeholder="What's happening?"
            onChange={(e)=> setInput(e.target.value)}/>

                {file && (
                    <div className='selectedfile-wrapper'>
                        <div className='clear-icon' onClick={()=>setFile(null)}>
                            <ClearIcon/>
                        </div>
                        <img src={file} alt="" className='selectedfile'/>
                    </div>
                )}
            </div>
        </div>
        <div className='tweetOptions'>
            <div className='tweetAttachment'>
                <div className='hover-effect' onClick={()=>{fileref.current.click()}}>
                  <Button className="button--circle" outline>
                  <AddPhotoAlternateIcon className='icon'/>
                  </Button>
                <input type="file" onChange={addImage} ref={fileref} hidden />
                </div>
            </div>
            <div className=''>
                <Button disabled={!input.trim() && !subtitle.trim() && !file} variant="contained" onClick={postSend}>Send</Button>

            </div>
        </div>
    
            </>
        )}
        
    {/* </div> */}





    </>
    
  );
}

export default AddPosts;
