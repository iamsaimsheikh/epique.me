import React from 'react'
import Styles from './sidebar.module.scss'

const sidebar = () => {
  return (
    <div className={Styles.sidebarContainer}>
      <h4>Who are you looking for?</h4>
      <input className={Styles.textInput} type='text' />
      <div className={Styles.searchResultContainer}>
        <div className={Styles.searchResult}>User</div>
        <div className={Styles.searchResult}>User</div>
        <div className={Styles.searchResult}>User</div>
      </div>
    </div>
  )
}

export default sidebar