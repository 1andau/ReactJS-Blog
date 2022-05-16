import React from 'react';
import { useState } from 'react';
// import {storage} from '../../../authorization/firebase';
// import Header from '../../../components/Header';
import { storage } from '../authorization/firebase';
import Header from '../components/Header';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';

function Comment() {






  return (
    <div>
      <Header />
  
    </div>
  );
}

export default Comment;
