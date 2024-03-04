import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import Mimenu from "../components/menu";
import './OverviewDay.css'

const OverviewDay: React.FC = () => {
    return (
      <div>
       <Mimenu></Mimenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Calendar</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding">
          <div>
            <div className="firstcolumn">
              <button className="butonhora">9:00</button>
              <button className="butonhora">10:00</button>
              <button className="butonhora">11:00</button>

            </div>

            <div className="secondcolumn">
              <button className="butonhora">12:00</button>
              <button className="butonhora">13:00</button>
              <button className="butonhora">15:30</button>
            </div>

            <div className="thirdcolumn">
              <button className="butonhora">16:30</button>
              <button className="butonhora">17:30</button>
            </div>

            <div className="citas">
              <button className="butoncita mireserva">Tu reserva</button>
              <button className="butoncita ocupado">Ocupado</button>
            </div>


          </div>

          
          </IonContent>
        </IonPage>
      </div>
  

    );
  };
  
  export default OverviewDay;
  