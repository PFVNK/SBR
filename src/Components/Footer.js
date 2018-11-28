import React, { Component } from 'react';
import '../App.css';
import beachhouse from '../beachhouseBW.png'


class Footer extends Component {
    render() {
        return (
            <div className="App">
                <div className='footer-container'>
                    <div className='beach-house-img'>
                        <img src={beachhouse} alt="beach house animation" />
                    </div>

                    <div className='contact-info'>
                        <h2>Let's Connect</h2>
                        <p>602 Rutledge Avenue</p>
                        <p>Charleston, South Carolina 29403</p>
                        <a href="mailto:hello@cobblehilldigital.com">
                            <p>hello@cobblehilldigital.com</p>
                        </a>
                        <a href="tel:843-718-3337">
                            <p>843-718-3337</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;