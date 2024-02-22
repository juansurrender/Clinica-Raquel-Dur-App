import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import Mimenu from '../components/menu';


const Tab3: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonMenuButton></IonMenuButton>
            </IonButtons>
          <IonTitle>Blogs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="containerheight" id="containerheight">
                  <div>
                      <h2 className="reservas">Blogs</h2>
                  </div>
                  <div className="blogs">
                      <div className="blogone">
                          <div className="imageblog">
                              <img className="inata" src="public\naruto chikito.JPG"></img>
                          </div>
                          
                          <div className="toxoblog">
                              <a className="atoxoblog" href="#"><strong> Raquel Durá</strong></a>
                              <p className='pblog'>¿Conoces nuestra clínica?</p>
                              <p className='pblog'>¿Sabes como trabajamos?</p>
                              <button className='botonblog'>Más información</button>
                          </div>
                          
                      </div>
                      <div className="blogone">
                          <div className="imageblog">
                              <img className="inata" src="public\hinata.jpg"></img>
                          </div>
                          
                          <div className="toxoblog">
                              <a className="atoxoblog" href="#"><strong> Raquel Durá</strong></a>
                              <p className='pblog'>¿Conoces nuestra clínica?</p>
                              <p className='pblog'>¿Sabes como trabajamos?</p>
                              <button className='botonblog'>Más información</button>
                          </div>
                          
                      </div>
                      <div className="blogone">
                          <div className="imageblog">
                              <img className="inata" src="public\sasuke chikito.jpg"></img>
                          </div>
                          
                          <div className="toxoblog">
                              <a className="atoxoblog" href="#"><strong> Raquel Durá</strong></a>
                              <p className='pblog'>¿Conoces nuestra clínica?</p>
                              <p className='pblog'>¿Sabes como trabajamos?</p>
                              <button className='botonblog'>Más información</button>
                          </div>
                          
                      </div>
                  </div>
              </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
