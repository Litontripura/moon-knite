import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Container from '../Components/Container';

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Container>
            <Outlet></Outlet>
           </Container>
        </div>
    );
};

export default Main;