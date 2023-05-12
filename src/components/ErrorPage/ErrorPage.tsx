import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
    const mensajeError = 'ERROR ';
  return (
    <h1 className={styles.error}>{mensajeError.repeat(1000)}</h1>
  )
}
