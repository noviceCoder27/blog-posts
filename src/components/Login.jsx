import React, { useEffect } from 'react'
import {auth,provider} from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Login = ({setIsAuth}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('isAuth')) {
      navigate('/')
    }
  },[])
  

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      setIsAuth(true)
      localStorage.setItem('isAuth', true)
      navigate('/')
    })
  }

  return (
    <div className='login flex justify-center '>
      <button className = 'btn border-none bg-slate-300 mt-8 font-semibold hover:shadow-2xl hover:shadow-slate-900 hover:bg-slate-400 ' onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login