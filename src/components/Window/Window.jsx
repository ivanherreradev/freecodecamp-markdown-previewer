import React from 'react'
import styles from './Window.module.css'

const Window = ({ children }) => {
  return (
    <section className={styles.windowContainer}>
      <header className={styles.windowTop}>
        <ul className={styles.windowButtons}>
          <li className={`${styles.windowButton} ${styles.minimize}`} />
          <li className={`${styles.windowButton} ${styles.maximize}`} />
          <li className={`${styles.windowButton} ${styles.close}`} />
        </ul>
      </header>
      <article className={styles.windowContent}>{children}</article>
    </section>
  )
}

export default Window
