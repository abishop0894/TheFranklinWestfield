import React from 'react';
import AppBar from '@mui/material/AppBar';
import '../App.css'
import { Squeeze as Hamburger } from 'hamburger-react'
import Toolbar from '@mui/material/Toolbar';
import logo from '../white.png'
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import { Outlet, Link } from "react-router-dom"; -wherever drawer is located,
  



 const Navbar = () => {
    const [open, setOpen] = React.useState(false);
   
  

    
  
  

    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}> 
      
  <AppBar style={{backgroundColor: 'black'}} className='nav' color="primary" ><Toolbar className="toolbar" style={{display: 'flex', gap: '70vw'}} enableColorDark>
<img className='logo' src={logo} style={{width: '19vw', height: '6vh'}}></img>  <Hamburger color='#d3901c'  onClick={() => setOpen(true)}></Hamburger></Toolbar></AppBar>


   
         </div>
    )
  }
  
  export default Navbar