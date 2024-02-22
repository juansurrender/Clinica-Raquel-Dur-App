import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonButtons, IonMenuButton } from '@ionic/react';
import './Tab2.css';
import Mimenu from '../components/menu';

const Tab2: React.FC = () => {
    return (
        <div>
            <Mimenu></Mimenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Recetas</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen className="ion-padding">
                    <div className="containerten " id="containerten">
                        <div className='reservas'>
                            <h2 className="reservas">Recetas Saludables</h2>
                        </div>
                        <div className="blogs">
                            <div className="blogone">
                                <div className="blogscomida">
                                    <div>
                                        <img className='foto' src='public\esparragos.JPG'></img>
                                    </div>

                                    <div className="comida">
                                        <a className="atoxoblog" href="#"><strong>ESPÁRRAGOS REVUELTOS EN PAN TOSTADO</strong></a>
                                        <p className="pcomida">¿No sabes qué cenar? ¿Deseas comer algo sencillo? Te muestro esta receta tan sencilla y buenísima para comerlo por la noche!</p>
                                        <button className='botoncomida'>Más información</button>
                                    </div>

                                </div>
                            </div>
                            <div className="blogs">
                                <div className="blogscomida">
                                    <div className=''>
                                        <img className="foto" src="public\pesto.jpg"></img>
                                    </div>

                                    <div className="comida">
                                        <a className="atoxoblog" href="#"><strong>TIBURONES CON PESTO</strong></a>
                                        <p className="pcomida pestopesto">¿Te gusta la salsa de pesto? ¿Te prohíbe porque no lo considera saludable? Por supuesto, que lo es, prueba esta receta y la disfrutarás!</p>
                                        <button className='botoncomida'>Más información</button>
                                    </div>

                                </div>
                            </div>

                            <div className="blogs">
                                <div className="blogscomida">
                                    <div className=''>
                                        <img className="foto" src="public\gazpacho-de-remolacha_0.jpg"></img>
                                    </div>

                                    <div className="comida">
                                        <a className="atoxoblog" href="#"><strong>GAZPACHO DE REMOLACHA</strong></a>
                                        <p className="pcomida remolacharemolacha">Una buena receta y fresca con caballa y huevo picado para el verano.</p>
                                        <button className='botoncomida'>Más información</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </IonContent>
            </IonPage>
        </div>

    );
};

export default Tab2;
