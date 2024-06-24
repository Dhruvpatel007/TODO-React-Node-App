import React from 'react'
import Button, { SelectButton } from './Button'
import styles from '../styles/modules/app.module.scss';
import { useState } from 'react';
import TodoModal from './TodoModal';
import { useDispatch } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';


const AppHeader = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch();
    const updateFilter = (e)=>{
      dispatch(updateFilterStatus(e.target.value))
    }

  return (
    <div className={styles.appHeader}>
      <Button variant='primary' type='button' onClick={()=>{setModalOpen(true)}}>Add Task</Button>
      <SelectButton id='status' onChange={updateFilter}>
        <option value='all'>all</option>
        <option value='incomplete'>Incomplete</option>
        <option value='complete' >Complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} type='Add'/>
    </div>
  )
}


export default AppHeader
