import { useEffect } from 'react'
import styles from './App.module.css'

import mockData from './mockData/mockData'
import { BlogContent } from './components/BlogContent/BlogContent'
import Header from './components/Header/Header'

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
            <BlogContent/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
