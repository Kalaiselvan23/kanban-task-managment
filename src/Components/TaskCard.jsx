import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import TaskModalContent from "./TaskModalContent";

const TaskCard = (props) => {
  const task = props.task;
  const boardId=props.boardId
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <>
      <Grid item onClick={handleClick}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography
                fontSize={"1rem"}
                fontWeight={"semibold"}
                sx={{ textAlign: "left" }}
              >
                {task.name}
              </Typography>
              <Typography
                color={"GrayText"}
                fontWeight={"bold"}
                sx={{ textAlign: "left" }}
              >
                {task.countofDone} of {task.subtasks.length} are done
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TaskModalContent task={task} boardId={boardId} />
      </Modal>
    </>
  );
};

export default TaskCard;
