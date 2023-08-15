import {Card, CardActionArea, Checkbox, FormControl, FormControlLabel, FormGroup, ListItem, Typography } from '@mui/material';
import React from 'react'

const TaskList = (props) => {
    const task=props.task;
  return (
    <>
    <ListItem sx={{bgColor:"blue"}}>
    <FormGroup>
    <Card sx={{padding:"1%",width:"100%",bgcolor:"yellow"}} >
     <CardActionArea>
        <FormControlLabel control={<Checkbox />} label={task.name} sx={{width:"100%"}}/>
     </CardActionArea>
    </Card>
        {/* <Checkbox></Checkbox>
        <Typography variant='body2'>{task.name}</Typography> */}
    </FormGroup>
    </ListItem>
    </>
  )
}

export default TaskList