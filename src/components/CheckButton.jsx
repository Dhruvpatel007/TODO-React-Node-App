import React from 'react'
import styles from '../styles/modules/todoItem.module.scss'
import { useState } from 'react'

const CheckButton = ({check, setCheck, handleCheck}) => {

//  const [val, setVal] = useState(false)
  return (
    <div className={styles.svgBox}>
      <input
          type="checkbox"
          // name={props.name}
          checked={check}
          onChange={() => {
            setCheck(handleCheck);
          }}
        />
    </div>
  )
}

export default CheckButton;
