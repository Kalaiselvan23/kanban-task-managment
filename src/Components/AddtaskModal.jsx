import React from "react";
import {
    Box,
    Button,
    Modal, 
    Typography,
    TextField,
    IconButton,
    Grid,
    Select,
    MenuItem,
  } from "@mui/material";
import { useState } from "react";
const AddtaskModal = () => {
  const [addModal, setAddModal] = useState(false);
  const [subTask, setSubTask] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddModal(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const [taskStatus, setTaskStatus] = useState("todo");
 
  const inputStyle = {
    input: {
      color: "white",
      outline: "none",
      borderColor: "white",
      outlineColor: "white",
    },
    label: {
      color: "white",
    },
  };
  const [task,setTask]=useState({
    taskName:"",
    description:"",
    subTask:[],
    column:""
  })
  return (
    <Modal open={addModal} onClose={() => setAddModal(false)}>
      <Box
        sx={{
          backgroundColor: "#2b2c37",
          color: "white",
          padding: "2%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Add new Task</Typography>
          <Box color={"white"}>
            <TextField
              variant="outlined"
              required
              label="Task Name"
              margin="normal"
              fullWidth
              sx={inputStyle}
              onChange={(e)=>setTask((prev)=>({...prev,taskName:e.target.value}))}
              />
            <TextField
              label="Description"
              required
              margin="normal"
              multiline
              fullWidth
              sx={inputStyle}
              onChange={(e)=>setTask((prev)=>({...prev,description:e.target.value}))}
            />
            <Box>
              <Typography>Sub Tasks</Typography>
              <Grid container alignItems={"center"}>
                <Grid item lg={11}>
                  <TextField required fullWidth sx={inputStyle} />
                </Grid>
                <Grid item lg={1}>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "20px",
                  bgcolor: "white",
                  color: "#2b2c37",
                  marginTop: "20px",
                  ":hover": { backgroundColor: "white" },
                }}
                onClick={() => setSubTask((prev) =>prev.push(""))}
              >
                Add New Subtask
              </Button>
            </Box>
            <Select
              value={taskStatus}
              required
              onChange={(event) => setTaskStatus(event.target.value)}
              margin="dense"
              fullWidth
              sx={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <MenuItem value={"todo"}>Todo</MenuItem>
              <MenuItem value={"doing"}>Doing</MenuItem>
              <MenuItem value={"done"}>Done</MenuItem>
            </Select>
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: "20px" }}
              fullWidth
            >
              Create Task
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddtaskModal;
