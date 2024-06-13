import React from 'react'
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../styles/utils/getClasses';
import { format } from 'date-fns';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';
import { useState } from 'react';

const TodoItem = ({todo}) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () =>{
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Delete Successfully")
  }
  const handleUpdate = () =>{
   setUpdateModalOpen(true);
  }

  return (
    <>
    <div className={styles.item}>
      <div className={styles.todoDetails}>
       []
       <div className={styles.texts}>
        <p className={getClasses([styles.todoText, todo.status==='complete' && styles['todoText--completed']])}> 
            {todo.title}
        </p>
        <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
       </div>
      </div>
      <div className={styles.todoActions}>
         <div className={styles.icon} onClick={handleDelete}>
            <MdDelete />
         </div>
         <div className={styles.icon} onClick={handleUpdate}>
            <MdEdit />
         </div>
      </div>
    </div>
    <TodoModal type='Update' modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen}/>
    </>
  )
}

export default TodoItem
