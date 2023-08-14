import {Tabs,Tab, Box, Switch, Drawer, Button,Checkbox, Typography} from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {useSelector} from 'react-redux';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import TabPanel from '@mui/lab/TabPanel';
import { TabList } from '@mui/lab';

const DrawerMenu = () => {
  const [drawer,setCloseDrawer]=useState(true);
  // const dispatch=useDispatch();
  const boards=useSelector((state)=>state.tasks)
  return (
    <Drawer anchor='left' variant='persistent' PaperProps={{sx:{marginTop:"4%"}}} open={drawer} hideBackdrop={true} >
        <TabList orientation='vertical'>
        {boards.map((item,index)=>(<Tab label={item.name} iconPosition='start' icon={<AutoAwesomeMosaicIcon/>} key={index} />))}
        </TabList>
        <Box>
        </Box>
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