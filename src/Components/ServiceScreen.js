import React, { Component } from 'react';
import '../App.css';
import Fade from 'react-reveal/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import beachwave from '../beachwave.jpg'
import whitebounce from '../whitebounce.jpg'
import jetski from '../jetski1.jpg'
import slideboat from '../slideboat.jpg'
import toppalm from '../toppalm.png'
import bottompalm from '../bottompalm.png'



class ServiceScreen extends Component {
    render() {
        return (
            <div className="App">
                <div className='about-container'>
                    <div className='carousel-tree-img'>
                        <img src={bottompalm} alt="picture of palm leaves" />
                    </div>

                    {/*<div className='next-page-arrow'>
                        <FontAwesomeIcon icon={faChevronDown} size='3x' className='icon' />
                    </div>*/}

                    <header className='about-header'>
                        <h1>What We Do</h1>
                        <h2>Services We Offer</h2>
                    </header>

                    <Fade cascade>
                        <div className='about-images'>
                            <div className='about-image'>
                                <img className='about-img-1' src={whitebounce} alt="water bounce" />
                                <p>BOUNCE HOUSES</p>
                            </div>

                            <div className='about-image'>
                                <img className='about-img-2' src={jetski} alt="jet ski" />
                                <p>JET SKIS</p>
                            </div>

                            <div className='about-image'>
                                <img className='about-img-3' src={slideboat} alt=" boat with slide attached" />
                                <p>PEDAL BOATS</p>
                            </div>

                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}

export default ServiceScreen;