import React from 'react'
import Styles from './sidebar.module.scss'

const sidebar = () => {
  return (
    <div className={Styles.sidebarContainer}>
      <h4>Who are you looking for?</h4>
      <input type='text' />
    </div>
  )
}

export default sidebar