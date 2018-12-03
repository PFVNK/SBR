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
                            <p>602 Rutledge Avenue</p>
                            <p>Charleston, South Carolina 29403</p>
                            <p>hello@cobblehilldigital.com</p>
                            <p>843-718-3337</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;