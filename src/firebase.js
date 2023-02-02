import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDtFKPnjJNPhvr8Cd8jvYlm_TRUFI8Mypw",
    authDomain: "blog-posts-34f96.firebaseapp.com",
    projectId: "blog-posts-34f96",
    storageBucket: "blog-posts-34f96.appspot.com",
    messagingSenderId: "28543852583",
    appId: "1:28543852583:web:d325de3d253100be79ae02",
    measurementId: "G-D9NPCZS3X8"
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  const provider = new GoogleAuthProvider()

  export {auth,db, provider}