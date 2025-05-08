import React, { useEffect } from 'react'
import { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOptions from './InputOptions'
import ImageIcon from '@mui/icons-material/Image'
import SubscripitionIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post.js'
import { addDoc, collection, onSnapshot ,query, orderBy, serverTimestamp} from 'firebase/firestore';
import { db } from './firebase.js'
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import FlipMove from 'react-flip-move'
function Feed() {
  const user=useSelector(selectUser)
  const [input, setinput] = useState("")
  const [post, setpost] = useState([])
  useEffect(() => {
    const q = query(
      collection(db, 'post'),
      orderBy('timestamp', 'desc') 
    );
    const unsubscribe = onSnapshot( q,(snapshot) => {
      setpost(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));
    });
    return () => unsubscribe();
  }, []);


  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'post'), {
      name:user.displayName,
      description: user.email,
      message: input,
      photourl: user.photoURL||"",
      timestamp: serverTimestamp()
    });
    setinput("");
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={e => setinput(e.target.value)} type='text' />
            <button onClick={sendPost} type='submit'>send</button>
          </form>
        </div>
        <div className='feed_options'>
          <InputOptions Icon={ImageIcon} title='Photo' color="skyblue" />
          <InputOptions Icon={SubscripitionIcon} title='Video' color="yellow" />
          <InputOptions Icon={EventNoteIcon} title='Event' color="grey" />
          <InputOptions Icon={CalenderViewDayIcon} title='Write Article' color="lightgreen" />
        </div>
      </div>
      <div>
        <FlipMove>
        {post.map(({ id, data: { name, description, message, photourl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
          />))}
          </FlipMove>
      </div>
    </div>
  )
}

export default Feed
