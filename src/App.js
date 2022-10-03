import React, { useEffect } from 'react'
import Login from './components/Login'

const App = () => {

  useEffect(()=>{
    const hash = window.location.hash;
    console.log(hash)
  })
  return (
    <Login />
  )
}

export default App;