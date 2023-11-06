import React from 'react';
import './style.css';
const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left" style={{ border: 'none solid' }}>
                        <div className="text" style={{ marginLeft: '10px' }}>  <p>More information :</p></div>
                        <div className="icons cc_all" style={{ marginLeft: '10px' }}>
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Elamri Maryem</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">429 lot charaf Marrakech</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elamrimaryem31@gmail.com" target="_blank">
                                        <div className="sub-title">elamrimaryem31@gmail.com</div>
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-phone-square-alt"></i>
                                <div className="info">
                                    <div className="head">Tél</div>
                                    <div className="sub-title">06 89 96 89 03</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column left" style={{ border: 'none solid' }}>

                        <div className="text" style={{ marginLeft: '10px' }}>  <p>Get in touch with me using :</p></div>
                        <div className="icons cc_all" style={{ marginLeft: '10px' }}>
                            <div className="row">
                                <i className="fab fa-whatsapp-square"></i>
                                <div className="info">
                                    <div className="head">Whatsapp</div>
                                    <div className="sub-title">06 89 96 89 03</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fab fa-github-square"></i>
                                <div className="info">
                                    <div className="head">Github</div>
                                    <a href="https://github.com/maryemelamri" target="_blank">
                                        <div className="sub-title">maryemelamri</div>
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fab fa-linkedin"></i>
                                <div className="info">
                                    <div className="head">Linkdin</div>
                                    <a href="https://www.linkedin.com/in/maryem-elamri/" target="_blank">
                                        <div className="sub-title">@maryemelamri</div>
                                    </a>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fab fa-instagram-square"></i>
                                <div className="info">
                                    <div className="head">Instagram</div>
                                    <a href="https://www.instagram.com/maryemelamri/" target="_blank">
                                        <div className="sub-title">@maryemelamri</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
