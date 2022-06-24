import Head from 'next/head'
 import styles from '../styles/Home.module.css'
import Hero from './Hero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abound Consult</title>
        <meta name="description" content="Abound Consult School" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Hero />

    </div>
  )
}
