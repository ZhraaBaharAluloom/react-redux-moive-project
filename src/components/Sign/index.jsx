import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, authStatus } from '../../storage/reducer';
import fire from '../../db/config/firebase';

export default function Sign(){
  const dispatch = useDispatch();
  const auth = getAuth(fire);
  const provider = new GoogleAuthProvider(auth);
  const isAuthenticated = useSelector(state => state.isAuthenticated);

  function signUpOrSignIn(){
    signInWithPopup(auth, provider)
      .then((result) => {
        const {user} = result;
        const userData = {
          id: user.uid,
          email: user.email,
          dispalyName: user.displayName,
          photoURL: user.photoURL,
          creationTime: user.metadata.creationTime
        }
        dispatch(setUser(userData))
        dispatch(authStatus(true))
        
      }).catch((error) => {
        const {code} = error;
        const {message} = error;
        const {email} = error;
        console.log(email, code, message);
      });
    }
    return (
      <>
      { isAuthenticated && <Redirect to='/' /> }
      <h1>Sign in</h1>
      <button type='button' onClick={signUpOrSignIn}>Sign In with Google</button>
      <Link to='/'>Home</Link>
    </>
  )
}