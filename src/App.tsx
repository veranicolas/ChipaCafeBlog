import { useEffect } from 'react'
import styles from './App.module.css'

import mockData from './mockData/mockData'

// Cree muchos archivos y carpetas para ir organizando como seria cuando se modularize todo.
// Por motivos de mi salud mental y que no quiero tocar 10 archivos a la vez voy a hacer todo en este primero y de ahi
// modularizar toda la wea con sus respectivos archivos de estilo.

function App() {
  useEffect(()=>{
    console.log(mockData)
  },[])

  return (
    <>
      <div className={styles.mainComponent}>
        <div className={styles.appContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.title}>
              CafeChipa MDP
            </div>
            <div className={styles.navbarComponent}>
              <a href="#">Cafe</a>
              <a href="#">Chipa</a>
              <a href="#">Nosotros</a>
            </div>
          </div>
          <div className={styles.bodyContainer}></div>
        </div>
      </div>
    </>
  )
}

export default App
