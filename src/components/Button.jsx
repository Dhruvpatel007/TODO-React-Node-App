import React from 'react'
import styles from '../styles/modules/button.module.scss'
import { getClasses } from '../styles/utils/getClasses'

const ButtonTypes={
    primary : 'primary',
    secondary : 'secondary'
}

const Button = ({children, variant, type, ...rest}) => {
  return (
    <button type={type==='submit'?'submit' : 'button'} className={getClasses([styles.button,styles[`button--${ButtonTypes[variant]}`]])} {...rest}>{children}</button>
  )
}

const SelectButton = ({children, ...rest}) =>{
    return(
        <select className={getClasses([styles.button, styles.button__select])} {...rest}>{children}</select>
    )
}
export {SelectButton};
export default Button;
