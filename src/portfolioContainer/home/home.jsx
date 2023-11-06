
import React from "react";
import arrowSvg from "../../images/down-arrow.svg";
import PropTypes from "prop-types";
import cv from '../../images/ResumeElamri.pdf';
import image from "../../images/server-wall.jpg";
import image2 from "../../images/codeuse.png";
import { Button } from "primereact/button";
import SkillsSection from "../competance/competance"


import ContactMe from "../contactMe/contact";
import About from "../aboutMe/aboutMe";
import TimelineDemo from "../experience/myExperience";
import Formation from "../myResume/formation";

import Contact from "../contactMe/contactme";


//const imageAltText = "woman setting on her desktop working is a coding womann";

const Home = ({ name, title }) => {
    return (
        <div>
            <section id="home" className="dark">
                <img className="background" src={image2} alt="" />
                <div style={{ position: "absolute", top: "30%", left: "2rem" }}>
                    <h1>{name}</h1>
                    <h2>{title}</h2>
                </div>
                <div style={{ position: "absolute", bottom: "8rem", left: "40%" }}>


                    <a href={cv} download="RESUME elamri maryem.pdf" target="_blank">
                        <Button label="Download My Resume" type="button" className="mr-3 p-button-raised">

                        </Button>
                    </a>


                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elamrimaryem31@gmail.com" target="_blank">
                        <Button label="Contact Me" type="button" className="p-button-outlined"></Button>
                    </a>

                </div>
            </section>
            <About />
            <TimelineDemo />
            <Formation />
            {/* <ContactMe /> */}
            <Contact />
            <SkillsSection /></div>
    );
};

Home.defaultProps = {
    name: "",
    title: "",
};

Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Home;
