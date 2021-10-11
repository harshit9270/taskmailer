import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

import TopBar from '../../inc/Navbar/navbar';
import Footer from '../../inc/Footer/footer';
import Header from './header';
import Features from './features';

function Home() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Features
        boxType = "0"
        imgSrc = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg"
        title = "Get all your tasks at one place"
        body = "Add all your links here, to help others to discover all your important content at one go. Add your latest video, article, tour, store, website - everywhere you are online."
      />
      <Features
        boxType = "1"
        imgSrc = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg"
        title = "Manage easily"
        body = "Investment of seconds at Task2Do can save you hours. Just add the tasks and deadline here and leave the task of reminding on us and trust us we don't fail to remind."
      />
      <Footer/>
      
    </>
  );
}

export default Home;
