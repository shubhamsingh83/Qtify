import React from 'react'
import LogoImage from "../../assets/logoImage.png"
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt='logo' width={67}/>
    </div>
    
  )
}

export default Logo