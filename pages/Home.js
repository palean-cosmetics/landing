import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Logo from './logo.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Palean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image loading="eager" className={styles.image} src="/bg.webp" alt="Picture of the author" layout="fill" objectFit="cover" />

      <div className={styles.container}>
        <Logo className={styles.logo} />
      </div>
    </>
  )
}
