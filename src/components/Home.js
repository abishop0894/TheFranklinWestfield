import React from 'react';
import '../App.css';
import Background from '../components/Background';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Navbar';
import LeftRightOne from '../components/LeftRightOne';
import LeftRightTwo from '../components/LeftRightTwo';
import LeftRightThree from '../components/LeftRightThree';
import Contact from '../components/Contact';
import Residences from './Residences';
import Amenities from './Amenities';

const Home = () => {

    return (
<Container>
<Navbar></Navbar>
<Background></Background>
<LeftRightOne></LeftRightOne> 
<LeftRightTwo></LeftRightTwo>  
<LeftRightThree></LeftRightThree>  
<Contact></Contact>           
<Residences></Residences> 
<Amenities></Amenities>
 </Container>
 
    )

}

export default Home