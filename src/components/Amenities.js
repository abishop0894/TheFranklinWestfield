import '../App.css'
import Button from '@mui/material/Button';
import Contact from './Contact';
import one from '../one.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from './Navbar';
import AmnBack from './AmnBack';


const Amenities = () => {


    return (
        <div className="amnBod">
        <Navbar></Navbar>
       <AmnBack></AmnBack>
       <div className="leftRightTwoRes">
       <div className='right'>
       <p style={{color: 'white'}}>The brand new residences of The Franklin offer sophisticated style with a close eye on your comfort and convenience. Chef-inspired kitchens, expansive layouts and superior finishes combine to create an unrivaled lifestyle in the heart of Franklin Lakes.</p>
      
       </div> 
       <img src={one} style={{width: '54vw'}}></img>
       </div>

       
       <div className="leftRightThreeRes" style={{backgroundColor: 'black'}}>
      <img src={one} style={{width: '54vw'}}></img>
      <div className='rightRes'>
    
      <p style={{color: 'white'}}>The brand new residences of The Franklin offer sophisticated style with a close eye on your comfort and convenience. Chef-inspired kitchens, expansive layouts and superior finishes combine to create an unrivaled lifestyle in the heart of Franklin Lakes.</p>
      
      </div>
      </div>

       <Contact></Contact>
       </div>
    )
}

export default Amenities