import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebars from './Sidebars';
import Feed from './Feed.js'
import Login from './Login.js'
import Widgets from './Widgets.js'
import { useDispatch, useSelector } from 'react-redux';
import { login,logout, selectUser } from './features/UserSlice.js';
import {auth} from './firebase';
function App() {
  const user = useSelector(selectUser)
  const dispatch=useDispatch();
  useEffect(()=>{auth.onAuthStateChanged(userAuth=>{
    if (userAuth){
      // user is logged in
      dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoURL:userAuth.photoURL
      }))
    }else{
      // user is logged out
      dispatch(logout())
    }
  })},[dispatch])
  return (
    <div className="App">
      <Header />
      {!user ? (<Login />) : (
        < div className='app_body'>
             {/* app body */ }
      <Sidebars />
      <Feed />
      < Widgets />
    </div>
  )
}
    
    </div >
  );
}

export default App;
