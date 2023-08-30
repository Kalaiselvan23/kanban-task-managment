import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  tasks: [
    {
      name: "Perform Launch",
      boardId: nanoid(),
      taskList: [
        {
          taskId: nanoid(4),
          name: "Build Settings UI",
          subtasks: [
            { subId: nanoid(), name: "Account Page", isDone: false },
            { subId: nanoid(), name: "Billing Page", isDone: true },
          ],
          status: "Done",
          countofDone: 1,
        },
        {
          taskId: nanoid(4),
          name: "Build UI for search",
          subtasks: [
            { subId:nanoid(), name: "Search page", isDone: false},
            { subId: nanoid(), name: "Results page", isDone: true },
          ],
          status: "Todo",
          countofDone: 1,
        },
        {
          taskId: nanoid(),
          name: "Build Settings UI",
          subtasks: [
            { subId: nanoid(), name: "Account Page", isDone: false },
            { subId: nanoid(), name: "Billing Page", isDone: true },
          ],
          status: "Done",
          countofDone: 1,
        },
      ],
    },
    {
      name: "Perform Launch 2",
      boardId: nanoid(),
      taskList: [
        {
          taskId: nanoid(4),
          name: "Build Settings UI",
          subtasks: [
            { subId: nanoid(), name: "Account Page", isDone: false },
            { subId: nanoid(), name: "Billing Page", isDone: true },
          ],
          status: "Done",
          countofDone: 1,
        },
        {
          taskId: nanoid(4),
          name: "Build UI for search",
          subtasks: [
            { subId: nanoid(), name: "Search page", isDone: false },
            { subId: nanoid(), name: "Results page", isDone: true },
          ],
          status: "Todo",
          countofDone: 1,
        },
      ],
    },
  ],
  columns: ["Todo", "Doing", "Done"],
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
      // const newTask = { ...action.payload };
      // state.tasks.push(newTask);
      // console.log("hellworold")
    },
    checkTask: (state,action) => {
      const {boardId,taskId,task}={...action.payload}
      // console.log(boardId)
      for(let i of state.tasks){
        if(i.boardId===boardId)
        {
          for(let j of i.taskList)
          {
            j.subtasks.forEach((sub)=>{
              if(sub.subId===task.subId)
              {
                sub.isDone=!sub.isDone
              }
            })
          }
        }
      }
      
    },
  },
});

export const { addTask,checkTask } = tasksSlice.actions;
export default tasksSlice.reducer;
