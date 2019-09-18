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
                <footer>
                    <div className="flex-column-headers">
                        <div>
                            <h3>Men</h3>
                            <p>OCA Low</p>
                            <p>OCA High</p>
                            <p>CATIBA Low</p>
                            <p>CATIBA High</p>
                        </div>
                        <div>
                            <h3>Women</h3>
                            <p>OCA Low</p>
                            <p>OCA High</p>
                            <p>CATIBA Low</p>
                            <p>CATIBA High</p>
                        </div>
                        <div>
                            <h3>Support</h3>
                            <p>FAQ</p>
                            <p>Returns</p>
                            <p>Live Chat</p>
                        </div>
                        <div>
                            <h3>About</h3>
                            <p>Mission</p>
                            <p>Vision</p>
                            <p>Future</p>
                        </div>
                        <div>
                            <h3>Pop Up Stories</h3>
                            <p>Find near you</p>
                            <p>Register</p>
                        </div>
                        <div>
                            <h3>Newsletter</h3>
                            <div>
                                <div>
                                    <input type="email" name="email" id="email" value="Enter email" readOnly /><button>Join Us</button>
                                </div>
                                <div>
                                    <i className="fab fa-instagram fab-footer"></i>
                                    <i className="fab fa-facebook-square fab-footer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer>
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
