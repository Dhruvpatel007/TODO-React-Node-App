import React from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const TodoModal = ({ type, modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(title == ''){
    //   toast.error('please add title');
    // }
    if (title && status) {
      if(type==='Add'){
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          }),
        );
        toast.success("Task Added Successfully");
        setModalOpen(false);
      }
      if(type==='Update'){
        console.log('updating task')
      }
    } else {
      toast.error("Title Should not be Empty");
    }
  };

  return (
    <>
      {modalOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div
              className={styles.closeButton}
              onClick={() => {
                setModalOpen(false);
              }}
              onKeyDown={() => {
                setModalOpen(false);
              }}
            >
              <MdOutlineClose />
            </div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.formTitle}>
                {type === "Update" ? "Update" : "Add"} task
              </h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                />
              </label>
              <label htmlFor="status">
                status
                <select
                  name="status"
                  id="status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  value={status}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {type === "Update" ? "Update" : "Add"} Task
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
