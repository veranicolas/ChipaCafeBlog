
import styles from './Index.module.css'

const Carrousel = () =>{

    return(
        <div className={styles.carrouselContainer}>

        </div>
    )
}

const Index = () => {

    document.title = "CafeChipa MDP"

    return (
        <div className={styles.indexContainer}>
            <Carrousel />
        </div>
    );
};

export default Index;