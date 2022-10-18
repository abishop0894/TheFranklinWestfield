import '../App.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import SouthIcon from '@mui/icons-material/South';



const Bar = () => {

    return (
     
            <AppBar style={{backgroundColor: '#d3901c'}} className='bar' position="static" color="primary" ><Toolbar style={{display: 'flex', gap: '70vw'}} className="barSpace" enableColorDark>
            <h2 style={{fontSize: '35px', whiteSpace: 'nowrap'}}>COMING SOON</h2> <SouthIcon style={{width: '7vw', height: '6vh'}}></SouthIcon></Toolbar></AppBar>
           
       
    )
}

export default Bar