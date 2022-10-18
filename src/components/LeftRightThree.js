import '../App.css'
import one from '../one.png'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LeftRightThree = () => {
    return (
        <div className="leftRightThree">
       <img src={one} style={{width: '54vw'}}></img>
       <div className='right'>
       <h1 style={{color: '#d3901c', fontSize: '3.4rem'}}>A NEW LEVEL OF LIVING</h1>
       <p style={{color: 'black'}}>The brand new residences of The Franklin offer sophisticated style with a close eye on your comfort and convenience. Chef-inspired kitchens, expansive layouts and superior finishes combine to create an unrivaled lifestyle in the heart of Franklin Lakes.</p>
       <Button style={{color: 'black', fontSize: 'xx-large', fontWeight: 'bolder',  display: 'flex', alignSelf: 'flex-start' }} variant="text" endIcon={<ArrowForwardIosIcon style={{width:'3vw', color:'#d3901c', fontSize: 'xx-large', fontWeight: 'bolder'}}/>}>Check Out</Button>
       </div>
       </div>
    )
}

export default LeftRightThree