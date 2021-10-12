import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {

 const [menuActive, setMenuActive] = useState(false);
 
 const handleMenu = ()=>{
   setMenuActive(!menuActive);

   if(!menuActive){
     document.body.style.overflow = 'hidden'
   } else{
      document.body.style.overflow = ''
   }
 } 

 window.addEventListener('click', (event)=>{
      if(event.target.classList.contains('menu-wrapper')){
        setMenuActive();
        document.body.style.overflow = ''
      }
 });
  return (
  <>
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" 
      style={{ 
        backgroundColor:'#222',
      }}> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
          style={{ 
            fontSize:'17px',
            }}>
            
          <Link to='/' style={{textDecoration:'none', color:'#fff'}}> AlphaShop</Link>    
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ 
              margin:0,
            }}
            onClick={()=>handleMenu()}
           
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    {menuActive &&   <Menu handleMenu = {handleMenu}/>}
  
   </> 
  );
}
