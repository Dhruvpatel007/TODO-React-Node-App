import React from 'react'
import styles from '../styles/modules/modal.module.scss';
import { MdOutlineClose } from 'react-icons/md';
import Button from './Button';
import { useState } from 'react';

const TodoModal = ({modalOpen, setModalOpen}) => {

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');

    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log({title,status});
    }
   
  return (
  <>
   {modalOpen && (
      <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.closeButton} onClick={()=>{setModalOpen(false)}} onKeyDown={()=>{setModalOpen(false)}}>
        <MdOutlineClose />
      </div>
       <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
         <h1 className={styles.formTitle}>Add task</h1>
         <label htmlFor='title'>
            Title
            <input type='text' id='title' onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
         </label>
         <label htmlFor='status'>
          status
          <select name='status' id='status' onChange={(e)=>{setStatus(e.target.value)}} value={status}>
             <option value='incomplete'>Incomplete</option>
             <option value='complete'>Complete</option>
          </select>
         </label>
         <div className={styles.buttonContainer}>
         <Button type='submit' variant='primary'>Add Task</Button>
         <Button type='button' variant='secondary' onClick={()=>{setModalOpen(false)}}>cancel</Button>
         </div>
        </form>
       </div>
    </div>
   )}
  </>
  )
}

export default TodoModal
