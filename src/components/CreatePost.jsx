import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router'
import {db,auth} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'

const CreatePost = () => {

    const [title, setTitle] = useState()
    const [content,setContent] = useState()

    const postsCollectionRef = collection(db, 'posts')

    const navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('isAuth')) {
            navigate('/')
        }
    },[])

    const createPost = async() => {
        await addDoc(postsCollectionRef, {
            title,
            content,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
        })
        navigate('/')
    }

  return (
    <div className = 'blog flex flex-col bg-darker-gray text-white w-1/2 p-4 ml-auto mr-auto mt-32 leading-8'>
        <h1 className='font-bold text-center text-2xl mb-4 text-slate-100'>Write your Blog</h1>
        <label htmlFor='title'>Title: </label>
        <input type="text" name="title" id="title" className='bg-slate-100 text-black rounded-md'onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor='content'>Content: </label>
        <textarea type="text" name="content" id="content" className='bg-slate-100 h-60 text-black rounded-md' onChange={(e) => setContent(e.target.value)}/>
        <button className='w-fit ml-auto mr-auto mt-4 bg-slate-50 text-darker-gray p-2 rounded-xl hover:bg-cyan-100 hover:font-semibold' onClick={createPost}>POST BLOG</button>
    </div>
  )
}

export default CreatePost