import { GoogleAuthProvider,GithubAuthProvider, getAuth,signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/google.svg'
import GithubIcon from '../assets/github.svg'

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
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    src={GoogleIcon}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with Google</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
            <div className="auth__buttnon" onClick={githubSignup}>
              <div className="button-content">
                <div className="under-logo">
                  <img
                    className="auth__buttnon-logo"
                    src={GithubIcon}
                    alt=""
                  />
                </div>

                <span className="auth__buttnon-text">Sign in with GitHub</span>
              </div>
              <div className="auth__button-transition"></div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    </>
  )
} 


