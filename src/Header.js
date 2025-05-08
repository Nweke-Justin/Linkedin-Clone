import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { useDispatch } from 'react-redux'; 
import { logout } from './features/UserSlice';
import {auth} from './firebase'
function Header() {
  const dispatch=useDispatch();
  const logOutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
      <div className='left_header'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEUAfrv///8AfLoAcLXE2uopgbzI2OnR4u5GjsI0g73o8fcAdbcAbbPN3+30+PuQt9ebwNzh6/S80+ZalsZ9rtISgr0AZbBdnso0jMKkxN4AarJvpc6MsdTZ5/FpncqwzeN/qdBbkcRLlsd3oswcWK3cAAAFJElEQVR4nO2dbXOqOhCAkwUKJsqrFJUi1v7//3iDHE9rlQRPwshy9/nQmc7IwDNhIdkkC+MXEmCIgaS3YJe/KeCWgfRbJl+hdlE2q/wqkxXy1VdjiyyyXiZO0LsomyS+yIS4A6YHIOxk4u0CGkY1zTZWMplcQMOoppGZkkm9V1+HG7xUyZSLaBjVNCVn4v3VV+GKd8Hyhdxl6j7L2RJeMj0yYdVCQkYFTcV2y5HZsfLV1+COBakQxOyArqMNbAlPP+URBKvVKoCOV1+NFZJFxyRvhMg27bbYYdaR7LgX/JtNEqG1kcU+5rc0SYmyTwewbfg9/hlhdxtY8rtZerIanQ2w9LEL5+KIzEbdYwMqnU2EK25kMezCeYhKBoJMJ8Pb9auv8AlkonXhosbTNiCHgv9KjieDKDXR35NVaJrmoI+YDjzJHWl04S2WgbeszDLhGUnQeKlZRhyR3GdebpbhJyQy6w3JzJO1vyAZrzW7xF9IZMwdgG4NAZJHM+zMMj6aWYSDqZ/J+R5NmsYcNDGW+Ff3WbScu0w9AkxvmhRNw6im+dS7hJjS6ADacXOMaNTMulVpuhutPbz6+p5Dfg6PNn1MuZkL8vgo03xxQZbQ7JDF28N4aT1Ewf8XuUrFnUu4xZNkugHg+GuCpkkjpC5dMpAdE//qI9oT3omzDgBYRUW93W6rzyjAPKXZA9+8+lIIgiAI4ilAep637vA8KRG/yEAe5Hm7z/2N4i3fJ/VufcDZ8/MOUdrE8Y9+rPpHhGl0cD/CuLT/MA9SAPojbg+ANWuH8oxxWx7cZhggSH0d+7vTwU53RP4zAwLyrJ9myCq34RPoT/d2N3KGKNT8/sf2NoDCPGOS1YFDm6lkAKK7BXkP8St3jTORDMBpKE3yG5E6a5xpZICNa5Ye39VKsElkJBszv/hN42hT7BQyMhgz8fsTcXZiM4GMDHS/GLBxcqe5lwH2vIt6RrtYeexexjjl85jQQW/NucxhzBKWRzjYteha5uP0xDP5BmE/e+papv2XgOnZWE+fupa5z8CPJ52ZjBWN7Tq9OcnwxLLPOSuZJlqQDK+XJOMHC5LhdvVxZiZjV7tkZjJ2e1xmJsMXJWP13pxaJhaZEE/0Pa3qykwp07Tpx6k+1vUp2Y8d5IQ2y3Wmk8lPRSmvQPQ1bpwT2xSWmUomrFY3qVeQwdeoTNoMWyYN7vqMIKMxCSibQc00MvXD6QrYjbCx2RY2iczQPmI54libPsAUMvfzIFc8c4bA5tk8gUwz3FsEaXymtfOS0Q1KZGVKEthknNzL6MtcGlOENotc3ct8aCO4q+ynZTMnmUa/3wYYJpnW8NJbGxp2VjKm7cOmvaFzkslMe1RljUcmNPWtoMQj4xunWQ54ZMzvvHf942xOMubeiKEGwZxk9kYZw7N5RjIjSkMb9iDjkvEWJaMfBZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZAMyZDM/1amFRri+2XKEPmaAzLzljFPe0ZhsxkIum/oDvOg2ID+iBG1yp4+4zM6Wp4+YooTEgTxr2D5UOEISobo0z4GYMeq5chUDM/XPU3IhDkoTzcTvJwJm6oUs+JdMF4uJGig5MyulMuM8FIlk+GsJ/4bkJmSie1KU82FbvM94zxcQscaQI1wWTeWXUDUeEl8keGZo3rIL0QW3cbbTsZQ1wIBsLqkQS4yPMUdNgB9SYRehie4Zf58jvE/ha130LWQ03MAAAAASUVORK5CYII=' alt=''/>
        <div className='header_search'>
        {/* search */}
        <SearchIcon />
        <input type='text'/>
        </div>
      </div>
        <div className='right_header'>
          <HeaderOption Icon={HomeRoundedIcon } title={'Home'}/>
          <HeaderOption Icon={PeopleAltRoundedIcon } title={'My Network'}/>
          <HeaderOption Icon={ BusinessCenterRoundedIcon  } title={'jobs'}/>
          <HeaderOption Icon={ SmsRoundedIcon } title={'Messaging'}/>
          <HeaderOption Icon={ NotificationsSharpIcon } title={'Notifications'}/> 
          <HeaderOption avatar={true} onClick={logOutOfApp} title={"Me"}/>
        </div>
    </div>
  )
}

export default Header 
