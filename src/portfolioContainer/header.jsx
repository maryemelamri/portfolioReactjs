import React from 'react';
import {Button} from "primereact/button";
import filel from '../images/cv.pdf';


const Header = () =>{
    return (



  <section id="contact">
                    <span className="block text-6xl font-bold mb-1">Create ttttttttttttttttt screens your</span>
                    <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <Button label="Learn More" type="button" className="mr-3 p-button-raised">
                        <a href={filel} download="Resume"></a>
                    </Button>
                    <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
                </section>



    );
}
export default Header;

