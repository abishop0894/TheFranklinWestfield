import React, { useEffect, useState } from 'react';
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
import GalleryPage from '../pages/GalleryPage';

const Home = () => {

    const [isShrunk, setShrunk] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if (
                    !isShrunk &&
                    (document.body.scrollTop > 20 ||
                        document.documentElement.scrollTop > 20)
                ) {
                    return true;
                }

                if (
                    isShrunk &&
                    document.body.scrollTop < 4 &&
                    document.documentElement.scrollTop < 4
                ) {
                    return false;
                }

                return isShrunk;
            });
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Navbar isShrunk={isShrunk}></Navbar>
            <Background></Background>
            <GalleryPage />
            {/*<LeftRightOne></LeftRightOne>
            <LeftRightTwo></LeftRightTwo>
            <LeftRightThree></LeftRightThree>
            <Contact></Contact> */}
            {/* <Residences></Residences>
            <Amenities></Amenities> */}
        </>

    )

}

export default Home