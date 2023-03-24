import styles from './Header.module.css'

const Header = () => {
    const title = 'Calculadora IMC'
    return (
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
    )
  }
  
  export default Header;