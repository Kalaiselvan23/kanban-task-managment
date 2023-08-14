import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tasks:[{
    name: "Perform Launch",
    taskList: [
      {
        name: "Build Settings UI",
        subtasks: [
          {name: "Account Page",isDone: false},
          {name: "Billing Page",isDone: true,},
        ],
        status:"Done",
      },
      {
        name: "Build UI for search",
        subtasks: [
          { name: "Search page", isDone: false },
          { name: "Results page", isDone: true },
        ],
        status:"Todo",
      },
      {
        name: "Build Settings UI",
        subtasks: [
          {name: "Account Page",isDone: false},
          {name: "Billing Page",isDone: true,},
        ],
        status:"Done",
      },
    ],
  },
  {
    name: "Perform Launch 2",
    taskList: [
      {
        name: "Build Settings UI",
        subtasks: [
          {name: "Account Page",isDone: false},
          {name: "Billing Page",isDone: true,},
        ],
        status:"Done",
      },
      {
        name: "Build UI for search",
        subtasks: [
          { name: "Search page", isDone: false },
          { name: "Results page", isDone: true },
        ],
        status:"Todo",
      },
    ],
  }],
  columns:["Todo","Doing","Done"]
}
const tasksSlice=createSlice({
    name:"tasks",
    initialState,
    reducer:{
        addTask:(state,payload)=>{
            const newTask={...payload}
            state.tasks.push(newTask)
        }
    }
})

export const {addTask}=tasksSlice.actions;
export default tasksSlice.reducer