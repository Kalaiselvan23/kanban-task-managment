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
                fontWeight={"semibold"}
                sx={{ textAlign: "left" }}
              >
                helloworld
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TaskModalContent task={task} />
      </Modal>
    </>
  );
};

export default TaskCard;
