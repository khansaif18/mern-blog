import { useEffect } from 'react'
import './App.css'
import Signup from './pages/Signup'
import axios from 'axios'

function App() {

  const fetchData = async () => {
    const res = await fetch('/api')
    const data = await res.json()
    console.log(data);
  }

  useEffect(() => {
    try {
      axios.get('/api').then(res => console.log(res.data))
    } catch (error) {
      console.log(error);

    }
  }, [])

  return (

    <>
      <h2>MERN BLOG</h2>
      <Signup />
    </>
  )
}

export default App
