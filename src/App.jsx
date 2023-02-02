import React, { useState } from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import CreatePost from './components/CreatePost';

export default function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
 
  return (
    <div className="App flex flex-col">
     <Navbar isAuth={isAuth}/>
     <Router>
      <Routes>
        <Route exact path = "/" element = {<Home isAuth = {isAuth}/>}/>
        <Route exact path = "/login" element = {<Login setIsAuth = {setIsAuth}/>}/>
        <Route exact path = "/createPost" element = {<CreatePost />}/>
      </Routes>
     </Router>
    </div>
  )
}

