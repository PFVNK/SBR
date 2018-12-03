import React, { Component } from 'react';
import '../App.css';
import beachhouse from '../beachhousepalm.png'


class Footer extends Component {
    render() {
        return (
            <div className="App">
                <div className='footer-container'>
                    <div className='beach-house-img'>
                        <img src={beachhouse} alt="beach house animation" />
                    </div>

                    <div className='contact-info'>
                        <div className='contact-info-content'>
                            <h2>Let's Connect</h2>
                            <div className='contact-bottom-content'></div>
                            <p>4mi North of bridge</p>
                            <p>Ambergris Caye, Belize</p>
                            <p>hello@secretbeachrentals.com</p>
                            <p>843-718-3337</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;