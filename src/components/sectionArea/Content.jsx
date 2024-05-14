import React from 'react'
import Menu from './Menu'
import About from './sections/About'
import styles from './Content.module.css'
import Resume from './sections/Resume'
export default function Content() {
  return (
    <div className={`${styles.contentContainer}`}>
     <section> <Menu /></section>
     {/* <section> <About /></section> */}
     <section> <Resume /></section>

    </div>
  )
}
