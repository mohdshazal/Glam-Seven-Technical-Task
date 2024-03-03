import React from 'react'
import styles from './Input.module.scss'
const Input = ({input_width,input_height,placeholder,button_text,button_width}:{
    input_width:string;
    input_height:string;
    placeholder:string;
    button_text:string;
    button_width:string;
}) => {
  return (
    <div className={styles.inputContainer}>
    <input style={{width:input_width,height:input_height}} placeholder={placeholder}/>
    <button style={{width:button_width}}>{button_text}</button>
    </div>
  )
}

export default Input