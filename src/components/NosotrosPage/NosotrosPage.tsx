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
            <h3 style={{textAlign:'center', fontFamily:'Roboto'}}>Nicolas Vera</h3>
            <p style={{padding: '1vh 2vh'}}>Nicolás es un programador con amplia experiencia en el desarrollo web y móvil. Tiene un conocimiento profundo de lenguajes como JavaScript, Python y Swift, y es hábil en la creación de aplicaciones y sitios web responsivos, intuitivos y seguros. Además, Nicolás tiene habilidades en el diseño de interfaces de usuario y la optimización de la experiencia del usuario.</p>
          </div>
          <div className={styles.people}>
            <img src={fotos.napo} height={200} width={200}/>
            <h3 style={{textAlign:'center', fontFamily:'Roboto'}}>Tomas Napolitano</h3>
            <p style={{padding: '1vh 2vh'}}>Napo es un ingeniero de software altamente capacitado en la arquitectura de software y en la implementación de soluciones escalables. Tiene un fuerte conocimiento de patrones de diseño y de programación orientada a objetos, y es experto en el uso de herramientas de desarrollo como Git y Jenkins. Napo tiene habilidades de liderazgo y una gran capacidad para trabajar en equipo.</p>
          </div>
          <div className={styles.people}>
            <img src={fotos.leo} height={200} width={200}/>
            <h3 style={{textAlign:'center', fontFamily:'Roboto'}}>Leo Lalanne</h3>
            <p style={{padding: '1vh 2vh'}}>Leo es un desarrollador de software enfocado en la integración de sistemas y la automatización de procesos. Tiene experiencia en el desarrollo de API y en la implementación de soluciones de integración, y es experto en el uso de herramientas como Postman y Swagger. Además, Leo es hábil en la automatización de pruebas y en el desarrollo de scripts de automatización de tareas repetitivas.</p>
          </div>
        </div>
      </div>
    </>
  )
}
