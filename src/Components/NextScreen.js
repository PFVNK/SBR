import React, { Component } from 'react';
import '../App.css';
import Zoom from 'react-reveal/Zoom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Video1 from '../Sequence1.mp4'
import CarouselView from './CarouselView'
import AutoCarousel from './AutoCarousel'
import bottompalm from '../bottompalm.png'


class NextScreen extends Component {
    render() {
        return (
            <div className="App">



                {/*<div className='next-page-arrow'>
                        <FontAwesomeIcon icon={faChevronDown} size='3x' className='icon' />
                    </div>*/}

                <div className='carousel-container'>
                    <div className='carousel'>
                        <CarouselView />
                    </div>

                    <div className='carousel-text'>
                        <Zoom cascade>
                            <h1>Find the Secret Island.... find fun</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis eius quisquam ab dignissimos adipisci iusto, nemo debitis reiciendis! Architecto eaque placeat dolore harum doloremque. Illo at quo officia quas.</p>
                            <a href="#">Learn About Our Services</a>
                        </Zoom>
                    </div>
                </div>
            </div>
        );
    }
}

export default NextScreen;