import { MoreVert } from '@mui/icons-material';
import { Box, Card, CardContent, IconButton, List,Typography } from '@mui/material'
import TaskList from './TaskList';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TaskModalContent = (props) => {
    const name=props.task.name;
    const boardId=props.boardId
    const subtasks=props.task.subtasks;
    const countOfDone=subtasks.filter((task)=>{
        return task.isDone==true
    }).length;  
  return (
   <Card sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"2%",width:"20vw"}}>
    <CardContent>
    <Box>
       <Typography variant='body1' width={"fit-content"} fontWeight={"bold"}>{name}
       </Typography>
       <IconButton><MoreVert/></IconButton>  
    </Box>
    <Box>
        <Typography variant='body2'>
        {countOfDone} of {subtasks.length} is done
        </Typography>
        <List>
            {subtasks.map((task,index)=>{
                return <TaskList key={index} task={task} taskId={props.task.taskId} boardId={props.boardId} />
            })}
        </List>
    </Box>
    </CardContent>
   </Card>
  )
}

export default TaskModalContent