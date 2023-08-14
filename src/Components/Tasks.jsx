import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Tasks = (props) => {
  return (
    <Grid container direction={"column"}>
    {props.tasks.map((item,index)=>{
        return <Grid item key={index} lg={3}>
            <Card sx={{bgcolor:"#2b2c37",color:"white"}}>
                <CardContent>
                    <Typography>{item.name}</Typography>
                </CardContent>
            </Card>
        </Grid>
    })}
    </Grid>
  )
}

export default Tasks