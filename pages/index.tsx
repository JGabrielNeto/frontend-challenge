import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Simulador de investimentos
        </h1>
      </header>
      <main className={styles.flex}>
        <h2>Simulador</h2>
        <h2>Resultado da Simulação</h2>
      </main>
    </div>
  )
}

export default Home