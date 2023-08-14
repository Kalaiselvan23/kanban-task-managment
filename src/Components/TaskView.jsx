import { Box, Grid, Typography,Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Tasks from './Tasks';

const TaskView = () => {
  const tasks=useSelector((state)=>state.tasks);
  // console.log(tasks)
  return (
    <Box sx={{marginTop:"3vh"}}>
    {/* <Grid container direction={"column"} lg={3}>
      {tasks.map((item,index)=>{
        return <Tasks key={index} tasks={item.taskList} />
      })}
    </Grid> */}
    </Box>
  )
}

export default TaskView