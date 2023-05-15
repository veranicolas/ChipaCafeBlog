import styles from './NosotrosPage.module.css'

import fotos from './fotos'

export const NosotrosPage = () => {
  return (
    <>
     <div className={styles.content}>
        <h2 style={{fontWeight:100}}>Sobre nosotros</h2>
        <div className={styles.peopleCards}>
          <div className={styles.people}>
            <img src={fotos.vera} height={200} width={200}/>
            <h3 style={{textAlign:'center'}}>Nicolas Vera</h3>
          </div>
          <div className={styles.people}>
            <img src={fotos.napo} height={200} width={200}/>
            <h3 style={{textAlign:'center'}}>Tomas Napolitano</h3>
          </div>
          <div className={styles.people}>
            <img src={fotos.leo} height={200} width={200}/>
            <h3 style={{textAlign:'center'}}>Leo Lalanne</h3>
          </div>
        </div>
      </div>
    </>
  )
}
