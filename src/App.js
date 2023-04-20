import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';


import { StyleClass } from 'primereact/styleclass';

import "./styles.css";
import AppHeader from "./portfolioContainer/navbar";
import Home from "./portfolioContainer/home/home"
import ContactMe from "./portfolioContainer/contactMe/contact";
import Resume from "./portfolioContainer/myResume/resume";
import Header from "./portfolioContainer/header";

import { BrowserRouter as Router, Route } from 'react-router-dom';
import photo2 from "./trspMe.png";
import Footer from "./portfolioContainer/footer";


const siteProps = {
    name: "Elamri Maryem",
    title: "Web Designer & Data Analyst",
    // email: "alex@example.com",
    // gitHub: "microsoft",
    // instagram: "microsoft",
    // linkedIn: "satyanadella",
    // medium: "",
    // twitter: "microsoft",
    // youTube: "Code",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";
function App() {



    return (
        <>
            <AppHeader/>
            <main className="main">

                <Home name={siteProps.name} title={siteProps.title} />

                <Resume/>
                <ContactMe/>
            </main>
            <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
       {/*<Footer/>*/}
        </>

    )
}

export default App;
