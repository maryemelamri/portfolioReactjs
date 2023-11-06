import React, { useState } from 'react';

const SkillsSection = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Mes Compétences</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">Mes compétences créatives et mes expériences.</div>
                        <p>Grâce aux nombreuses plateformes et les stages que j'ai effectués, j'ai appris de nombreux langages qui m'ont permis de créer, développer et exploiter les différences environnantes.</p>
                        <a onClick={openModal}>Plus.</a>
                    </div>
                    {modalVisible && (
                        <div id="id01" className="modal">
                            <form className="modal-content animate">
                                <div className="container">
                                    <div className="columnform right">
                                        <center>
                                            <h4 className="detail">Evaluation basée sur le nombre de projets effectués avec ce langage</h4>
                                        </center>
                                        <div className="bars">
                                            <div className="info">
                                                <span>JavaScript ES6</span>
                                                <span>90%</span>
                                            </div>
                                            <div className="line js"></div>
                                        </div>
                                        <div className="bars">
                                            <div className="info">
                                                <span>Php</span>
                                                <span>80%</span>
                                            </div>
                                            <div className="line php"></div>
                                        </div>
                                        <div className="bars">
                                            <div className="info">
                                                <span>Node.js</span>
                                                <span>70%</span>
                                            </div>
                                            <div className="line nodejs"></div>
                                        </div>
                                        {/* Add more skills as needed */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript ES6</span>
                                <span>90%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Php</span>
                                <span>80%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Node.js</span>
                                <span>70%</span>
                            </div>
                            <div className="line nodejs"></div>
                        </div>
                        {/* Add more skills as needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
