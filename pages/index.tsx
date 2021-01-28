import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Video from '../components/video'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Video />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
