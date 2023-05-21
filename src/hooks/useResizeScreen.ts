import { useState, useEffect } from 'react'

const useResizeScreen = (activo:boolean) => {
    
    const screenWidth = window.innerWidth

    const [estado, setEstado] = useState<boolean>(activo)
    useEffect(()=>{
        
        const setNavbarVisible = () =>{
            if(window.innerWidth <= 767) {
                setEstado(false)
            } else {
                setEstado(true)
            }
        }
    
        window.addEventListener('resize', setNavbarVisible)
    
        // Al final retorna el removeEventListener porque eso es una buena practica para cuando se termina el ciclo del componente
        return ()=>{
            window.removeEventListener('resize',setNavbarVisible)
        }
      }, [])

      return [estado, screenWidth]
};

export default useResizeScreen;