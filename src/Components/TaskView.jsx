import { Box, Grid, Typography,Button } from '@mui/material'
import { useSelector } from 'react-redux'
import Tasks from './Tasks';
import { TabPanel } from '@mui/lab';
import TaskDiv from './TaskDiv';

const TaskView = () => {
  const tasks=useSelector((state)=>state.tasks.tasks);
  const tabState=useSelector((state)=>state.tab);
  return (
    <Box sx={{marginTop:"3vh"}}>
    {tasks.map((boards,index)=>{
      return <TaskDiv key={index}  value={index} board={boards} />
    })}
    </Box>
  )
}

export default TaskView