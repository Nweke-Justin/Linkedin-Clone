import React from 'react'
import './login.css'
import { auth } from './firebase'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/UserSlice'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();
    const LoginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
            }).catch(error=>alert(error.message))
    }
    const register = () => {
        if (!name) {
            return alert("please enter fullname")
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: user.email,
                            uid: user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMjR7gx6W5-B-hglc98RYENcZeIrSg0t6aA&s' />

            <form>
                <input type='text' placeholder='FullName required if registering' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Profile Pic URL(optional)' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={LoginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className='login_register' onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
