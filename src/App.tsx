import { useState , useEffect } from 'react'
import styles from './App.module.css'

import mockData from './mockData/mockData'

function App() {
  useEffect(()=>{
    console.log(mockData)
  },[])

  return (
    <>
      <div className={styles.App}>
        hola
      </div>
    </>
  )
}

export default App
