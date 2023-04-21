
import React from "react";
import arrowSvg from "../../images/down-arrow.svg";
import PropTypes from "prop-types";
import cv from '../../images/cv.pdf';
import image from "../../images/server-wall.jpg";
import image2 from "../../images/codeuse.png";
import {Button} from "primereact/button";



import ContactMe from "../contactMe/contact";
import About from "../aboutMe/aboutMe";
import TimelineDemo from "../experience/myExperience";
import Formation from "../myResume/formation";


const imageAltText = "woman setting on her desktop working is a coding womann";

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
                <a href={cv}  download="cv">
                <Button  label="Download My Resume" type="button" className="mr-3 p-button-raised">

                </Button> </a>
                <Button label="Contact Me" type="button" className="p-button-outlined"></Button>
            </div>
        </section>
            <About/>
            <TimelineDemo/>
            <Formation/>
            <ContactMe/>
        </div>
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
