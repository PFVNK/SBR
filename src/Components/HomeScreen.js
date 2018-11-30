import React, { Component } from 'react';
import '../App.css';
import Zoom from 'react-reveal/Zoom'
import Video1 from '../Sequence1.mp4'
import PalmTree from '../white-palm-tree-png.png'
import sun from '../Sun.svg'

class HomeScreen extends Component {
    render() {
        return (
            <div className="App">
                <header className="site-header">
                    <div className='header-overlay'></div>
                    <Zoom cascade>
                        <a href="#0" className="logo">Secret Beach Rentals</a>
                        <nav className="site-nav">
                            <ul>
                                <li className="active"><a href="#0">About</a></li>
                                <li><a href="#0">Services</a></li>
                                <li><a href="#0">Direction</a></li>
                            </ul>
                        </nav>
                        <div className="account-actions">
                            <div className="account-dropdown">

                                <a href="#0" className="sign-out-link">Get in Touch</a>
                            </div>
                        </div>
                    </Zoom>
                </header>

                <aside className='weather-bar'>95f sunny<img src={sun} alt="sun svg" /></aside>

                <div className='video-container'>
                    <video className='HPvideo' autoPlay loop>
                        <source src={Video1} type='video/mp4' />
                    </video>

                    <div>
                        <img className='palm-tree' src={PalmTree} alt="palm" />
                    </div>
                </div>

                <div className='video-overlay'></div>

                <div className="text-copy">
                    <h1>COME EXPLORE</h1>
                </div>
            </div>
        );
    }
}

export default HomeScreen;

const test = 1;