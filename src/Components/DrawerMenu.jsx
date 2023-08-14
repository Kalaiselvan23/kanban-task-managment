import {Tabs,Tab, Box, Switch, Drawer, Button,Checkbox, Typography} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import { changeTab } from '../redux/slices/tabSlice';
import { useDispatch } from 'react-redux';

const DrawerMenu = () => {
  const [drawer,setCloseDrawer]=useState(true);
  const [tabState,setTab]=useState(0);
  const dispatch=useDispatch();
  const boards=useSelector((state)=>state.tasks.tasks)
  const handleTab=(event,value)=>{
    dispatch(changeTab(value))
  }
 
  return (
    <Drawer anchor='left' variant='persistent' PaperProps={{sx:{marginTop:"4%"}}} open={drawer} hideBackdrop={true} >
    {/* <TabContext value={tabState}> */}
        <TabList orientation='vertical'  onChange={handleTab}>
        {boards.map((item,index)=>(<Tab label={item.name} iconPosition='start' icon={<AutoAwesomeMosaicIcon/>} key={index} />))}
        </TabList>
        <Box>
        </Box>   
    {/* </TabContext> */}
        <Box sx={{position:"absolute",bottom:"10vh"}}>
          <Switch></Switch>
          <Button startIcon={<VisibilityOffIcon/>} onClick={()=>setCloseDrawer(false)} fullWidth>
          <Typography>Hide Screen</Typography>
        </Button>
        </Box>
        
        </Drawer>

  )
}

export default DrawerMenu