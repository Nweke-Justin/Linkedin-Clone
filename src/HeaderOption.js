import React from 'react'
import './HeaderOption.css'
import Avatar from "@mui/material/Avatar";
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
function HeaderOption({avatar,Icon,title,onClick}) {
  const user=useSelector(selectUser)
  return (
    <div onClick={onClick} className='headerOption'>
       {Icon&&<Icon className="headerOption_icon"/>}{/* this line means that if i pass in an icon only then shoul icon be rendered as a component */}
       {/* {avatar="https://media.istockphoto.com/id/1312468241/vector/people-set.jpg?s=612x612&w=0&k=20&c=cq6j-y0nNK9OEsplmbBXpn_TkyBB35vcUhb1LmfjayI="} */}
       {avatar && (
  <Avatar className="headerOption_icon" >
    {user?.displayName?.[0]}
  </Avatar>
)}

       <p className='headerOption_title'>{title}</p>
       
    </div>
  )
}

export default HeaderOption
