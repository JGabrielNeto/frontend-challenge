import type { NextPage } from 'next'
import styles from '../styles/Home.module.sass'
import Simulator from '../components/Simulator/Simulator'
import Results from '../components/Results/Results'

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Simulador de investimentos
          </h1>
        </header>
        <main className={styles.flex}>
          <Simulator />
          <Results />
        </main>
      </div>
  )
}

export default Home