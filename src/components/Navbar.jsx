import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'


export default function Navbar({isAuth}) {

  const userSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
    }) 
  }

  return (
    <div className = 'navbar w-full h-20 bg-[#273238] text-white flex justify-center gap-x-8 items-center text-xl'>
        <div className = 'home flex items-center gap-x-2'>
            <div className='w-3 h-3 bg-red-500 rounded-2xl mt-1.5'></div>
            <a href = "/">Home</a>
        </div>
        {!isAuth && <div className='login flex items-center gap-x-2'>
            <div className='w-3 h-3 bg-yellow-300 rounded-2xl mt-1.5'></div>
            <a href = "/login">Login</a>
        </div>}
        {isAuth && <div className='createPost flex items-center gap-x-2'>
            <div className='w-3 h-3 bg-green-300 rounded-2xl mt-1.5'></div>
            <a href = "/createPost">Create a Post</a>
        </div>}
        {isAuth && <div className='logout flex items-center gap-x-2'>
            <div className='w-3 h-3 bg-yellow-300 rounded-2xl mt-1.5'></div>
            <a href = "/login"  onClick = {userSignOut}>Logout</a>
        </div>}
        
        
    </div>
  )
}

