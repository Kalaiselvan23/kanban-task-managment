import { MoreVert } from '@mui/icons-material';
import { Box, Card, CardContent, IconButton, List, ListItem, Typography } from '@mui/material'
import TaskList from './TaskList';

const TaskModalContent = (props) => {
    const name=props.task.name;
    const subtasks=props.task.subtasks;
    console.log(subtasks)
  return (
   <Card sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",padding:"2%",width:"20vw"}}>
    <CardContent>
    <Box>
       <Typography variant='body1' width={"fit-content"} fontWeight={"bold"}>{name}
       </Typography>
       <IconButton><MoreVert/></IconButton>  
    </Box>
    <Box>
        <Typography variant='body2'>hellwolr</Typography>
        <List>
            {subtasks.map((task,index)=>{
                return <TaskList task={task} key={index}/>
            })}
        </List>
    </Box>
    </CardContent>
   </Card>
  )
}

export default TaskModalContent