import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Mimenu from '../components/menu';

const Tab1: React.FC = () => {
  return (
    <div>
     <Mimenu></Mimenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Tab1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <div className='presentaicíon'>
            <div className='container doble'>
              <img className='adolf' src='public\Captura.JPG' alt="" />
              <div className='elementoclinica'>
                <h1 className="clinica" >
                  Clínica Raquel Dura
                </h1>

                <p className="pclinica"> Tu clínica  de Nutrición, donde Te ayudaré a mejorar tus hábitos  A conseguir tus objetivos A llevar un estilo de vida saludable.  La clínica está situada en Canals y desde la App tambien desde casa.</p>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </div>

  );
};

export default Tab1;
