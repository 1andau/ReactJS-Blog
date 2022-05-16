// import { createContext, useContext, useState } from 'react';
import { GoogleAuthProvider,GithubAuthProvider, getAuth,signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';


export const ExternalAuth = ({text}) => {
  const navigate = useNavigate();
  const GoogleProvider = new GoogleAuthProvider(); 
  const GithubProvider = new GithubAuthProvider();
  
  const auth = getAuth();

  const googleSignup = async()=>{
    await signInWithPopup(auth, GoogleProvider)
    .then((res)=>{
      sessionStorage.setItem('AuthToken', JSON.stringify(res.user));
      console.log(res.user);
    })
    .catch((err) =>{
      console.log("wrong credintals");
    })
    const user = sessionStorage.getItem('AuthToken');
    if(user){
      navigate('/MainPosts');
    } else{
      alert('user Credentials is wrong');

    }
  }

  const githubSignup = async()=>{
    await signInWithPopup(auth, GithubProvider)
    .then((res)=>{
      sessionStorage.setItem('AuthToken', JSON.stringify(res.user));
      console.log(res.user);
    })
    .catch((err) =>{
      console.log("wrong credintals");
    })
    const user = sessionStorage.getItem('AuthToken');
    if(user){
      navigate('/home');
    } else{
      alert('user Credentials is wrong');

    }
  }

  return(
    <>
        <div className="auth">
      {/* {user && navigate ('/home')} */}
      <div className="popup-blackout">
        <div className="auth__popup">
          <h1>Sign In</h1>
          <hr />

          <div className="auth-ways">
            <div className="auth__buttnon" onClick={googleSignup}>
              {text}
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    // src={googleLogo}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with Google</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
            <div className="auth__buttnon" onClick={githubSignup}>
              {text}
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    // src={githubLogo}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with GitHub</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
          </div>
        </div>
        {/* <Link to="/">
          {' '}
          <Button> View without authorization</Button>
        </Link> */}
      </div>
    </div>
    </>
  )
} 








  // const googleSignup = () => {
  //   setLoading(true);
  //   setError('');
  //   signInWithPopup(auth, new GithubAuthProvider())
  //     .then((res) => console.log(res))
  //     .catch((err) => setError(err.code))
  //     .finally(() => setLoading(false));
  // };

// let aUID = '';

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     aUID = user.uid;
//   }
// });

// export const UserContext = createContext({});
// export const useUserContext = () => {
//   return useContext(UserContext);
// };

// export function createUser(userId) {
//   return db
//     .collection('users')
//     .doc(aUID)
//     .set({
//       userInfo: {
//         id: `${auth.currentUser.uid}`,
//         imageUrl: `${auth.currentUser.photoURL}`,
//         name: `${auth.currentUser.displayName}`,
//         email: `${auth.currentUser.email}`,

//       },
//     });
// }


// export function getAllUsers() {
//   const tempDoc = [];
//   return db
//     .collection('users')
//     .get()
//     .then((snapshot) => {
//       snapshot.docs.map((doc) => {
//         tempDoc.push(doc.id);
//       });
//       return tempDoc;
//     });
// }

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useState(() => {
//     setLoading(true);
//     const unsubscribe = onAuthStateChanged(auth, (res) => {
//       if (res) {
//         setUser(res);
//       } else {
//         setUser(null);
//       }
//       setError('');
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const signInWithGoogle = () => {
//     setLoading(true);
//     setError('');

//     signInWithPopup(auth, new GoogleAuthProvider())
//       .then((res) => console.log(res))
//       .catch((err) => setError(err.code))
//       .finally(() => setLoading(false));
//   };

//   const signInWithGithub = () => {
//     setLoading(true);
//     setError('');
//     signInWithPopup(auth, new GithubAuthProvider())
//       .then((res) => console.log(res))
//       .catch((err) => setError(err.code))
//       .finally(() => setLoading(false));
//   };

//   const logoutUser = () => {
//     signOut(auth);
//   };

//   const contextValue = {
//     user,
//     loading,
//     logoutUser,
//     signInWithGoogle,
//     signInWithGithub,
//   };
//   return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
// };
