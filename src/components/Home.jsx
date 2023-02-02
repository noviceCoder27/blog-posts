import React,{useState, useEffect} from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '../firebase'
import Delete from '../assets/delete.png'
import { deleteDoc, doc } from 'firebase/firestore'
import './Home.css'

const Home = ({isAuth}) => {

  const [postsList, setPostsList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(postsCollectionRef)
      setPostsList(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getPosts()
  },[])

  const deletePost = async(id) => {
    const postDoc = doc(db,'posts', id)
    await deleteDoc(postDoc)
  }

  return (
    <>
       {postsList.length !== 0 ? postsList.map(post => {

      return (
        <div className='card' key = {post.id}>
          <div>
            <div className = 'title'>
              <h1>{post.title}</h1>
              {isAuth && post.author.id === auth.currentUser.uid && <img src = {Delete} alt = 'delete-icon' className='delete-icon' onClick={() => deletePost(post.id)}/>}
            </div>
            
            <hr />
            <p className='content'>{post.content}</p>
            <h3>@{post.author.name}</h3>
        </div>
      </div> 
      )}
      ) : <h1 className='loading'>Loading Data ...</h1>}
    </> 
  )
}

export default Home