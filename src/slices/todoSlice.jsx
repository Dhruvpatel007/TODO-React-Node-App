import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () =>{
    // getting local todoList
    const localTodoList = window.localStorage.getItem('todoList');
     if (localTodoList){
        return JSON.parse(localTodoList);
     }
    // if todoList empty
    window.localStorage.setItem('todoList', [])
    return []
}

const initialValue = {
    todoList : getInitialTodo(),
}
export const todoSlice = createSlice({
    name : 'todo',
    initialState : initialValue,
    reducers : {
        addTodo : (state,action) => {
           state.todoList.push(action.payload);
           const todoList = window.localStorage.getItem('todoList');
           if(todoList){
            const todoListArr = JSON.parse(todoList);
            todoListArr.push({...action.payload});
            window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
           }else{
            window.localStorage.setItem('todoList', JSON.stringify([{...action.payload}]));
           }

        }
    }
})


export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;