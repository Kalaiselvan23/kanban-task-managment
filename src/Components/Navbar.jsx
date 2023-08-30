import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Menu,
  Modal,
  Select,
  TextField,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import DrawerMenu from "./DrawerMenu";

const Navbar = (props) => {
  const boardId=props.boardId;
  const [anchorEl, setAnchorEl] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [subTask,setSubtask]=useState([])
  const [taskStatus, setTaskStatus] = useState("todo");
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddModal(false);
  };    
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleAddbtn=()=>{
    return setSubtask((prev)=>[...prev,""])
  }
  const removeSubtask=(index)=>
  {
    console.log(index)
    setSubtask((prev)=>{
      const old=prev.filter((item,i)=>index===i)
      return [...old]
    });
    console.log(subTask)
  }
  const createSubtask=(item,index)=>{
    return  <Grid item key={index}>
    <Grid container alignItems={"center"}>
      <Grid item lg={11}>
        <TextField required fullWidth sx={inputStyle} />
      </Grid>
      <Grid item lg={1}>
        <IconButton onClick={()=>removeSubtask(index)}>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
    </Grid>
  }
  const open = Boolean(anchorEl);
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ fontWeight: "semi-bold" }}>
            Kanban
          </Typography>
          <Box marginLeft={"auto"}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setAddModal(true)}
              sx={{ borderRadius: "20px", border: "none" }}
              disableElevation
            >
              Add New Task
            </Button>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>
              <MenuItem onClick={handleCloseMenu} sx={{ color: "red" }}>
                Delete
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {/* <DrawerMenu /> */}
      </AppBar>
      <Modal open={addModal} onClose={() => setAddModal(false)} sx={{overflow:"auto"}}>
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
              />
              <TextField
                label="Description"
                required
                margin="normal"
                multiline
                fullWidth
                sx={inputStyle}
              />
              <Box>
                <Typography>Sub Tasks</Typography>
                <Grid container rowGap={1} direction={"column"}>
                {subTask.map(createSubtask)}
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
                  onClick={handleAddbtn}
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
    </div>
  );
};

export default Navbar;
