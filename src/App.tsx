import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import mockData from './mockData/mockData'
import Header from './components/Header/Header'

import styles from './App.module.css'

const App = () => {
  
  useEffect(()=>{
    console.log(mockData)
  },[])

  return (
    <>
      <div className={styles.mainComponent}>
        <div className={styles.appContainer}>
          <Header />
          <div className={styles.bodyContainer}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
