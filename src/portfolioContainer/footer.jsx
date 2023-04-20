// import React from 'react';
//
// function Footer() {
//     return (
//         <footer>
//
//         </footer>
//     );
// }
//
// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from "prop-types";



import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
    const {
        devDotTo,
        email,
        gitHub,
        instagram,
        linkedIn,
        medium,
        name,
        primaryColor,
        twitter,
        youTube,
    } = props;

    return (
        <div
            id="footer"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2.5rem",
                padding: "5rem 0 3rem",
                backgroundColor: primaryColor,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >

                <a href="mailto:elamrimaryem31@gmail.com?" >
                    <i className="pi pi-envelope"  style={{ fontSize: '2rem' }}></i>
                </a>





                <a href="https://github.com/maryem10" target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-github"  style={{ fontSize: '2rem' }}></i>
                </a>


                <a
                    href="https://www.instagram.com/maryem.elamri/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="pi pi-instagram"  style={{ fontSize: '2rem' }}></i>
                </a>

                <a href="https://www.linkedin.com/in/maryem-elamri" target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-linkedin"  style={{ fontSize: '2rem' }}></i>
                </a>


            </div>
            <p className="small" style={{ marginTop: 0, color: "white" }}>
                Created by {name}
            </p>
        </div>
    );
};

Footer.defaultProps = {
    name: "",
};

Footer.propTypes = {
    devDotTo: PropTypes.string,
    email: PropTypes.string,
    gitHub:  PropTypes.string,
    instagram: PropTypes.string,
    linkedIn: PropTypes.string,
    medium: PropTypes.string,
    name: PropTypes.string.isRequired,
    primaryColor: PropTypes.string,
    twitter: PropTypes.string,
    youTube: PropTypes.string,

};


/*const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={6}>
                        <h3>About Me</h3>
                        <p>My name is John Doe and I'm a web developer and data analyst.</p>
                    </Col>
                    <Col md={6}>
                        <h3>Contact Me</h3>
                        <ul>
                            <li>Phone: 555-555-5555</li>
                            <li>Email: john.doe@email.com</li>
                            <li>Address: 123 Main St, Anytown USA</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <p>Copyright © 2023
                            <a href="mailto:elamrimaryem31@gmail.com?"> elamrimaryem31@gmail.com
                            </a>
                        </p>
                        {/!*<p>&copy; 2023 My Portfolio</p>*!/}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};*/




export default Footer;

