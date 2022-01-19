import React, { useState, useEffect } from 'react';
import "./home.css";

export default function Home() {

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => {window.removeEventListener("resize", updateWidth);};
    },[updateWidth]);

    
    return(
            <div>
                <div className="flexContainer main_space">
                    <div className="align-item">
                        <div>
                            <h1 className="main_title">LAURE CONSEIL</h1>
                            <h2 className="subtitle">conseil conjugale & aide individuelle</h2>

                            <h3 className="bold_title">Adresse:</h3>
                            <p className="text_bold_title">16 Rue du Vieux-Marché-aux-Vins, 67000 Strasbourg</p>

                            <h3 className="bold_title">Contact:</h3>
                            <p className="text_bold_title">06 76 87 33 67</p>

                            <h3 className="bold_title">Mail:</h3>
                            <p className="text_bold_title">contact@laureconseil.fr</p>

                            <p className="texte_description">Pour ceux qui ont le sentiment d’être dans une impasse, <br/>je vous propose simplement une oreille attentive pour vous aider <br/> à voir plus clair dans votre vie.</p>
                        </div>
                    </div>
                    <div className="flexContainer">
                        <div>
                            <div className="text_right">
                                <h3 className="bold_title_agence">Agence web:</h3>
                                <p className="text_bold_title_agence">Malaury web service</p>
                            </div>
                            <input className="main_image" type="image" src="/assets/photo_main_tendu.jpg" />
                        </div>
                        {width > 542 ? <div className="align-item">
                            <p className="text_center vertical_text">
                                S<br/>
                                I<br/>
                                T<br/>
                                E<br/>
                                <br/> 
                                W<br/>
                                E<br/>
                                B<br/>
                                <br/> 
                                E<br/>
                                N<br/>
                                <br/> 
                                C<br/>
                                O<br/>
                                N<br/>
                                S<br/>
                                T<br/>
                                R<br/>
                                U<br/>
                                C<br/>
                                T<br/>
                                I<br/>
                                O<br/>
                                N<br/>
                            </p>
                        </div> : ''}
                    </div>
                </div> 
                <div>
                    {width < 542 ? 
                        <p className="vertical_text">SITE WEB EN CONSTRUCTION</p> : ''}
                </div>
            </div>
    );
}