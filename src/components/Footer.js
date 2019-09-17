import React, { Component } from 'react';

// simple not found component 
export default class Footer extends Component {

    render() {

        return (
            <div>
                <div className="basic-background">
                    <div><span className="fas fa-lock"></span>Secure Payment </div>
                    <div>|</div>
                    <div><i className="fas fa-fighter-jet"></i>Express Shipping </div>
                    <div>|</div>
                    <div><i className="fas fa-box"></i>Free Returns</div>
                </div>

                <footer className="black-bg">

                    <div className="flex-column-headers">
                        <h3>Men</h3>
                        <h3>Women</h3>
                        <h3>Support</h3>
                        <h3>About</h3>
                        <h3>Pop Up Stories</h3>
                        <h3>Newsletter</h3>
                    </div>

                    <div className="flex-column">
                        <ul>
                            <li>OCA Low</li>
                            <li>OCA High</li>
                            <li>CATIBA Low</li>
                            <li>CATIBA High</li>
                        </ul>
                        <ul>
                            <li>OCA Low</li>
                            <li>OCA High</li>
                            <li>CATIBA Low</li>
                            <li>CATIBA High</li>
                        </ul>
                        <ul>
                            <li>FAQ</li>
                            <li>Returns</li>
                            <li>Live Chat</li>
                        </ul>
                        <ul>
                            <li>Mission</li>
                            <li>Vision</li>
                            <li>Future</li>
                        </ul>
                        <ul>
                            <li>Find near you</li>
                            <li>Register</li>
                        </ul>
                        <ul>
                            <li>
                                <div>
                                    <input type="email" name="email" id="email" value="Enter email" readOnly /><button>Join Us</button>
                                </div>
                                <div>
                                    <i className="fab fa-instagram fab-footer"></i>
                                    <i className="fab fa-facebook-square fab-footer"></i>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <hr />
                    <div id="copyright">
                        <section>
                            Copyright © 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy
            </section>
                    </div>
                </footer>
            </div>
        )
    }
}
