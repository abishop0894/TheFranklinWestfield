import '../App.css'
import one from '../one.png'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


const LeftRightOne = () => {


    const navigate = useNavigate()
    return (
        <div className="leftRightOne">
       <img src={one} style={{width: '54vw'}}></img>
       <div className='right'>
       <h1 style={{color: '#d3901c', fontSize: '3.4rem'}}>A NEW LEVEL OF LIVING</h1>
       <p style={{color: 'white'}}>The brand new residences of The Franklin offer sophisticated style with a close eye on your comfort and convenience. Chef-inspired kitchens, expansive layouts and superior finishes combine to create an unrivaled lifestyle in the heart of Franklin Lakes.</p>
       <Button onClick={()=> navigate("/residences")} style={{color: '#d3901c', fontSize: 'xx-large', fontWeight: 'bolder',  display: 'flex', alignSelf: 'flex-start' }} variant="text" endIcon={<ArrowForwardIosIcon style={{width:'3vw', color: 'white', fontSize: 'xx-large'}}/>}> Check Out</Button>
       </div>
       </div>
    )
}

export default LeftRightOne