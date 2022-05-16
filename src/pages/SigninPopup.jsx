// import React from 'react';
// // import googleLogo from '../assets/icons/google-logo.svg';
// // import githubLogo from '../assets/icons/github-logo.svg';
// // import { useUserContext } from '../context/userContext';
// // import { getAllUsers, createUser } from '../context/userContext';
// import Button from '../components/Button';
// // import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {GoogleAuthProvider, getAuth, SignInPopup, signInWithPopup, GithubAuthProvider} from 'firebase/auth'
// import { async } from '@firebase/util';

// function SignIn({text}) {
//   const navigate = useNavigate();
//   // const { signInWithGoogle, signInWithGithub } = useUserContext();
//   const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();

//   const auth = getAuth();

//   // const { user } = useUserContext();
//   // const [authUser, setAuthUser] = React.useState({});
//   // const [allUser, setAllUser] = React.useState([]);
//   // const [logged, setLogged] = React.useState(false);


//   const googleSignup = async()=>{
//     await signInWithPopup(auth, googleProvider)
//     .then((res)=>{
//       sessionStorage.setItem('AuthToken', JSON.stringify(res.user));
//       console.log(res.user);
//     })
//     .catch((err) =>{
//       console.log("wrong credintals");
//     })
//     const user = sessionStorage.getItem('AuthToken');
//     if(user){
//       navigate('/home');
//     } else{
//       alert('user Credentials is wrong');

//     }
//   }

//   const githubSignup = async()=>{
//     await signInWithPopup(auth, githubProvider)
//     .then((res)=>{
//       sessionStorage.setItem('AuthToken', JSON.stringify(res.user));
//       console.log(res.user);
//     })
//     .catch((err) =>{
//       console.log("wrong credintals");
//     })
//     const user = sessionStorage.getItem('AuthToken');
//     if(user){
//       navigate('/home');
//     } else{
//       alert('user Credentials is wrong');

//     }
//   }
//   // React.useEffect(() => {
//   //   if (Object.keys(authUser).length !== 0) {
//   //     getAllUsers().then(setAllUser);
//   //   }
//   // }, [authUser]);

//   // React.useEffect(() => {
//   //   if (authUser.user) {
//   //     if (allUser.includes(authUser.user.uid)) {
//   //       console.log('User is');
//   //       setLogged(true);
//   //     } else {
//   //       console.log("User isn't");
//   //       createUser(authUser.user.uid);
//   //       setLogged(true);
//   //     }
//   //   }
//   // }, [allUser]);

//   return (
//     <div className="auth">
//       {/* {user && navigate ('/home')} */}
//       <div className="popup-blackout">
//         <div className="auth__popup">
//           <h1>Sign In</h1>
//           <hr />

//           <div className="auth-ways">
//             <div className="auth__buttnon" onClick={googleSignup}>
//               {text}
//               <div className="button-content">
//                 <div className="under-logo">
//                   <img
//                     className="auth__buttnon-logo"
//                     // src={googleLogo}
//                     alt=""
//                   />
//                 </div>

//                 <span className="auth__buttnon-text">Sign in with Google</span>
//               </div>
//               <div className="auth__button-transition"></div>
//             </div>
//             <div className="auth__buttnon" onClick={githubSignup}>
//               {text}
//               <div className="button-content">
//                 <div className="under-logo">
//                   <img
//                     className="auth__buttnon-logo"
//                     // src={githubLogo}
//                     alt=""
//                   />
//                 </div>

//                 <span className="auth__buttnon-text">Sign in with GitHub</span>
//               </div>
//               <div className="auth__button-transition"></div>
//             </div>
//           </div>
//         </div>
//         {/* <Link to="/">
//           {' '}
//           <Button> View without authorization</Button>
//         </Link> */}
//       </div>
//     </div>
//   );
// }

// export default SignIn;
