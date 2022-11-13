import React from 'react';
import {Header} from '../components/Home/Header'
import MainBody from '../components/Home/MainBody';
import Questions from '../components/Home/Questions'
import Footer from './Footer'


const Home = () => {
    return (
        <>
            <Header/>
            <MainBody/>
            <Questions/>
            <Footer/>
        </>
    );
}

export default Home;