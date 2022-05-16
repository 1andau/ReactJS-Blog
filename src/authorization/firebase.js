import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEaiRjX-GpgpG3rCfeDgBRVAR48iYjbT4",
  authDomain: "blog-52203.firebaseapp.com",
  databaseURL: "https://blog-52203-default-rtdb.firebaseio.com",
  projectId: "blog-52203",
  storageBucket: "blog-52203.appspot.com",
  messagingSenderId: "340486032054",
  appId: "1:340486032054:web:d65af0b3a5cb9999dab417"
};


export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
export const database = getFirestore();
export const storage = getStorage();



// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .setPersistence(auth.Auth.Persistence.SESSION)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem('name', name);
//       localStorage.setItem('email', email);
//       localStorage.setItem('profilePic', profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

