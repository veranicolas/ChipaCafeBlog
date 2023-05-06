import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import mockData from './mockData/mockData'

function App() {
  useEffect(()=>{
    console.log(mockData)
  },[])

  return (
    <>
      <div>
        hola
      </div>
    </>
  )
}

export default App
