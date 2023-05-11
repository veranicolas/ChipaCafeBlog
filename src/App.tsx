import { useEffect } from 'react'
import styles from './App.module.css'

import mockData from './mockData/mockData'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

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
