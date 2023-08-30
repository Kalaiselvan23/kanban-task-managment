import { TabPanel } from "@mui/lab";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import Navbar from "./Navbar";

const TaskDiv = (props) => {
  const board = props.board;
  const columns = useSelector((state) => state.tasks.columns);
  const { name,boardId, taskList } = { ...board };
  return (
    <TabPanel value={props.value} index={props.index}>
    <Navbar boardId={boardId}/>
      <Grid container direction={"row"}>
        {columns.map((status, index) => (
          <Grid item key={index} lg={3}>
            <Typography color={"GrayText"}>{status}</Typography>
            <Grid container direction={"column"} rowGap={2}>
              {taskList
                .filter((task) => task.status === status)
                .map((task, index) => {
                  return <TaskCard key={index} boardId={boardId} task={task} />;
                })}
            </Grid>
          </Grid>
        ))}
        {/* </Grid> */}
      </Grid>
    </TabPanel>
  );
};

export default TaskDiv;
