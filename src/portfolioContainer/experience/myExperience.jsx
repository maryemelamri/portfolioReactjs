import React from 'react';
import { Card } from 'primereact/card';
import {Col,Row} from "react-bootstrap";


const ExperienceCard = ({title, duration, tasks,tools }) => {

    return (


            <Col className=" col-m-12 col-sm-12">
        <Card className="bg-light  " style={{margin: "2rem" ,color:"black", height:"100%"}} title={title} footer={duration}>

            <div style={{color:"black"}}>
                <h5 style={{marginTop:"-1rem"}}>tasks:</h5>
                <ul style={{color:"black"}}>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}
                        </li>
                    ))}
                </ul>
                <p>tools: {tools}</p>


            </div>
        </Card>
            </Col>



    );
};

const Experiences = () => {
    // Données pour chaque expérience

    const experienceData = [
        {
            title: 'Summer Internship: Norsys Afrique',
            duration: '01/07/2022-16/09/2022',
            tools: '  Vue.js, Symfony, Node.js, Docker',
            tasks: [
                'Web development',
                'Implementation of a web application for event management',
                'Deploy app on Docker',
            ]
        },
        {

            title: 'Final Internship: Curious Market Research',
            duration: '01/04/2022-31/05/2022',
            tools: 'SPSS, Power BI, Excel',
            tasks: [
                'visualizing and analyzing data',
                'report writing',
                'Conducting surveys, collecting data',
                'Studying the market'
            ]
        },
        {
            title: 'Final Internship: OnestCom Marrakech',
            duration: '01/04/2020 - 31/05/2020',
            tools: ' PHP, Laravel, MySQL',
            tasks: ['Development of an e-commerce website']
        },
        {
            title: 'Initial Internship: the Regional Office of Agricultural Development',

            duration: '01/04/2019-30/05/2019',
            tools: 'C#, Ado.net, SQLServer',
            tasks: ['Development of a desktop application for managing a car fleet.']
        },
    ];

    return (

            <section className="section row" style={{marginTop:"2rem"}}  >

                <h2 style={{color:"black"}}>   Professional Experience:</h2><br/>
                   <Row>
                {experienceData.map((experience, index) => (

                    <ExperienceCard
                        key={index}
                        title={experience.title}
                        tools={experience.tools}
                        duration={experience.duration}
                        tasks={experience.tasks}

                    />



                ))}


                   </Row>
            </section>

    );
};

export default Experiences;
