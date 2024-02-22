import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton } from "@ionic/react";
import Mimenu from "../components/menu";
import './Calendar.css'
import React,{ useEffect } from "react";
import { calendar } from "ionicons/icons";


const Calendar: React.FC = () => {
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

          </IonContent>
        </IonPage>
      </div>
    );
  };
  
  export default Calendar;
  

