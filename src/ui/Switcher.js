"use client"

import React from 'react'
import styles from './switcher.module.css'
import { useTheme } from "@/features/theme/use-theme";
const Switcher = () => {

  const [theme, toggleTheme] = useTheme();

  return (
   <label id="switch" className={styles.switch}>
   <input type="checkbox" id="slider"
   checked={theme === "dark"}
   onChange={() => toggleTheme(theme === "light" ? "dark" : "light")}
   />
   <span className={`${styles.slider} ${styles.round}`}></span>
   </label>
  )
}

export default Switcher