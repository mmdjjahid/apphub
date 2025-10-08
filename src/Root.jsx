import React from 'react';
import Home from './pages/home';
import Apps from './pages/Apps';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <Home></Home> */}
            {/* <Apps></Apps> */}
        </div>
    );
};

export default Root;