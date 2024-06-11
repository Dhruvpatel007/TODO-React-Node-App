import React from 'react'
import Button, { SelectButton } from './Button'
import styles from '../styles/modules/app.module.scss';
import { useState } from 'react';
import TodoModal from './TodoModal';


const AppHeader = () => {

    const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' type='button' onClick={()=>{setModalOpen(true)}}>Add Task</Button>
      <SelectButton id='status'>
        <option value='all'>all</option>
        <option value='Incomplete'>Incomplete</option>
        <option value='Complete' >Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}


export default AppHeader
