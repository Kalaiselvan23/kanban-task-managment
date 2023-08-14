import { TabPanel } from '@mui/lab'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Grid} from "@mui/material"
import { useSelector } from 'react-redux';

const TaskDiv = (props) => {
    const board=props.board;
    const columns=useSelector((state)=>state.tasks.columns);
    const {name,taskList}={...board};
    console.log(name)
  return (
   <TabPanel value={props.value} index={props.index}>
   <Grid container direction={"row"}>
    {columns.map((status,index)=><Grid item key={index} lg={3}>
        <Typography>{status}</Typography>
        <Grid container direction={"column"} rowGap={2}>
        {taskList.filter((task)=>task.status===status).map((task,index)=>{
            return <Grid item key={index}>
                <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography fontSize={"1rem"} fontWeight={"semibold"} sx={{textAlign:"left"}}>{task.name}</Typography>
                        <Typography color={"GrayText"} fontWeight={"semibold"} sx={{textAlign:"left"}}>helloworld</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        })}
        </Grid>
    </Grid>)}
   {/* </Grid> */}
   </Grid>
   </TabPanel>
  )
}

export default TaskDiv