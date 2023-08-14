import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
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
    ],
  },
  {
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
    ],
  },
]
const tasksSlice=createSlice({
    name:"tasks",
    initialState,
    reducer:{
        addTask:(state,payload)=>{
            const newTask={...payload}
            state.push(newTask)
        }
    }
})

export const {addTask}=tasksSlice.actions;
export default tasksSlice.reducer