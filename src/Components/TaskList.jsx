import {Card, CardActionArea, Checkbox, FormControl, FormControlLabel, FormGroup, ListItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask, checkTask } from '../redux/slices/taskSlices';

const TaskList = (props) => {
    const task=props.task;
    const taskId=props.taskId;
    const boardId=props.boardId
    const [check,setCheck]=useState(false);
    const dispatch=useDispatch();
    const handleCheck=()=>{
      dispatch(checkTask({taskId,task,boardId}))
    }
    console.log(boardId)
  return (
    <>
    <ListItem sx={{bgColor:"blue"}}>
    <FormGroup>
    <Card sx={{padding:"1%",width:"100%"}} >
     <CardActionArea >
        <FormControlLabel control={!task.isDone?<Checkbox/>:<Checkbox checked/>} label={task.name} sx={{width:"100%",textDecoration:task.isDone?"line-through":"none"}} onChange={handleCheck} />
     </CardActionArea>
    </Card>
    </FormGroup>
    </ListItem>
    </>
  )
}

export default TaskList