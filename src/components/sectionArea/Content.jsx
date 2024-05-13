import React from 'react'
import Menu from './Menu'
import About from './sections/About'
import styles from './Content.module.css'
export default function Content() {
  return (
    <div className={`${styles.contentContainer}`}>
     <section> <Menu /></section>
     <section> <About /></section>
    </div>
  )
}
