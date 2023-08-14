import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton,Menu, Modal, Select, TextField, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import DrawerMenu from './DrawerMenu';

const Navbar = () => {
  const [anchorEl,setAnchorEl]=useState(null);
  const [addModal,setAddModal]=useState(false);
  const [subTask,setSubTask]=useState(0);
  const [taskStatus,setTaskStatus]=useState("todo");
  const handleSubmit=(event)=>{
    event.preventDefault();
    setAddModal(false)
    console.log("Hello world")
  }
  const inputStyle={
    input:{
      color:"white",
      outline:"none",
      borderColor:"white",
      outlineColor:"white"
    },
    label:{
      color:"white",
    }
  }
  
  const handleClick=(event)=>{
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu=()=>{
    setAnchorEl(null);
  }
  const open=Boolean(anchorEl)
  return (
    <div>
        <AppBar position="fixed" sx={{backgroundColor:"white",color:"black"}}>
          <Toolbar>
          <Typography variant="h4" sx={{fontWeight:"semi-bold"}}>
                Kanban
          </Typography>
          <Box marginLeft={"auto"}>
          <Button variant='contained' startIcon={<AddIcon/>} onClick={()=>setAddModal(true)} sx={{borderRadius:"20px",border:"none"}} disableElevation>Add New Task</Button>
          <IconButton onClick={handleClick}><MoreVertIcon/></IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={()=>handleCloseMenu}>
            <MenuItem onClick={handleCloseMenu}>Edit</MenuItem>
            <MenuItem onClick={handleCloseMenu} sx={{color:"red"}}>Delete</MenuItem>
          </Menu>
          </Box>
          </Toolbar>
          <DrawerMenu/>
        </AppBar>
        <Modal open={addModal} onClose={()=>setAddModal(false)}>
        <Box sx={{backgroundColor:"#2b2c37",color:"white",padding:"2%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",borderRadius:"10px"}}  >
        <form onSubmit={handleSubmit}>
          <Typography variant='h6'>Add new Task</Typography>
          <Box color={"white"}>
          <TextField variant='outlined' required label="Task Name" margin='normal' fullWidth sx={inputStyle}/>
          <TextField label="Description" required margin='normal' multiline fullWidth sx={inputStyle}/>
          <Box>
          <Typography>Sub Tasks</Typography>
            <Grid container alignItems={"center"}>
            <Grid item lg={11}>
            <TextField required fullWidth sx={inputStyle} />
            </Grid>
            <Grid item lg={1}>
            <IconButton><CloseIcon/></IconButton>
            </Grid>
            </Grid>
            <Button startIcon={<AddIcon/>} variant='contained' fullWidth sx={{borderRadius:"20px",bgcolor:"white",color:"#2b2c37",marginTop:"20px",":hover":{backgroundColor:"white"}}} onClick={()=>setSubTask((prev)=>prev+1)}>Add New Subtask</Button>
          </Box>
          <Select value={taskStatus} required onChange={(event)=>setTaskStatus(event.target.value)} margin='dense' fullWidth sx={{marginTop:"20px",marginBottom:"20px"}}>
          <MenuItem value={"todo"}>Todo</MenuItem>
          <MenuItem value={"doing"}>Doing</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
          </Select>
          <Button variant='contained' type='submit' sx={{borderRadius:"20px"}} fullWidth>Create Task</Button>
          </Box>
          </form>
        </Box>
        </Modal>
    </div>
  )
}

export default Navbar