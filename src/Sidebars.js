import React from 'react'
import './Sidebars.css'
import Avatar from "@mui/material/Avatar";
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
function Sidebars() {
  const user=useSelector(selectUser)
  const recentItem = (topic) => {
    return(
    <div className='sidebar_recentitem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>)
  }
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
      <img
  src='https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  alt=''
/>

        <Avatar src={user?.photoURL} className='sidebar_avatar'>
  {user?.displayName?.[0]}
</Avatar>
<h3 className='name'>{user?.displayName}</h3>
<p className='info'>{user?.email}</p>

      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you:</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post:</p>
          <p className='sidebar_statNumber'>2,440</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('React.JS')}
        {recentItem('Jobs Applied')}
        {recentItem('Pics')}
        {recentItem('Jobs')}
        {recentItem('Jobs Approved')}
      </div>
    </div>
  )
}

export default Sidebars
