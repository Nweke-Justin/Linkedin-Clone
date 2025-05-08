import React,{forwardRef} from 'react'
import "./Post.css"
import InputOptions from './InputOptions';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { Avatar } from '@mui/material';
const Post=forwardRef(({ name, description, message, photoURL },ref)=> {
    return (
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoURL}>
                    {!photoURL && name?.[0]}
                </Avatar>
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>
            </div>
            <div className='post_button'>
                <InputOptions Icon={RecommendRoundedIcon} title='like' color='gray' />
                <InputOptions Icon={ChatRoundedIcon} title='Comment' color='gray' />
                <InputOptions Icon={ShareRoundedIcon} title='Share' color='gray' />
                <InputOptions Icon={SendRoundedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
})

export default Post
