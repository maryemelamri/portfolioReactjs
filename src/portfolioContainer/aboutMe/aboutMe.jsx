import React from "react";
import { Card } from "primereact/card";
import image from "../../images/background.png";
// const About = () => {
//     const cardStyle = {
//         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
//     };
//
//     return (
//         <Card title="My Card" style={cardStyle}>
//             <p>Content for my card</p>
//         </Card>
//     );
// };



const imageAltText = "purple and blue abstract background";

const description =
    "I'm software engineering student studying at Ecole Marocaine des Sciences d'Ingénieurs, Proficient in data analysis, programming languages such as Python and SQL, and UI design and development.";

const skillsList = [
    "Statistical analysis",
    "Data visualization",
    "Database management",
    "Back-end technologies ",
    "Mobile user interfaces",
    "Front-end frameworks",
    "Agile methodologies",
    "project management"
];

const detailOrQuote =
    "As a data analyst, I enjoy working with data and using programming languages such as Python and SQL to extract insights from it. In addition, I also have skills in UI design and development, allowing me to create visually appealing and user-friendly interfaces for data-driven applications. My passion for technology and problem-solving drives me to continuously learn and improve my skills in data analysis, software engineering, and UI design.";

const About = () => {
    return (

        <section className="light" id="about">
            <img   className="background" src={image} alt={imageAltText} />

            <div class="shadow-2   justify-content-center "
                style={{
                    backgroundColor: "white",
                    width: "50%",
                    padding: "4rem",
                    margin: "3rem auto",
                    textAlign: "center",

                }}
            >
                <h2>About Myself</h2>
                <p className="large">{description}</p>
                <hr />
                <ul
                    style={{
                        textAlign: "left",
                        columns: 2,
                        fontSize: "1.25rem",
                        margin: "2rem 3rem",
                        gap: "3rem",
                    }}
                >
                    {skillsList.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
                <hr />
                <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
            </div>
        </section>
    );
};

export default About;
