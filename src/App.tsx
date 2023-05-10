import { useEffect } from 'react'
import styles from './App.module.css'

import mockData from './mockData/mockData'
import { BlogContent } from './components/BlogContent/BlogContent'

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
              <div className={styles.customLink}>
                <a href="/cafe">Cafe</a>
              </div>
             
              <div className={styles.customLink}>
                <a href="/chipa">Chipa</a>
              </div>
              <div className={styles.customLink}>
                <a href="/nosotros">Nosotros</a>
              </div>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <BlogContent/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
