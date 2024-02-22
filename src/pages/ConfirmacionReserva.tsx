import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from "@ionic/react";
import Mimenu from "../components/menu";
import './ConfirmacionReserva.css'

const ConfirmacionReserva: React.FC = () => {
    return (
      <div>
       <Mimenu></Mimenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Confirmación de Reserva</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen className="ion-padding">
            <div className="container">
            <div className="marco">
              <h1 className="tittle">
                Hola [Nombre del Cliente]
              </h1>
              <ul className="uldetalles">Detalles de la Reserva:
                <li className="lidetalles">
                  Fecha: [Fecha de la Cita] 
                </li>
                <li className="lidetalles">
                    Hora: [Hora de la Cita] 
                </li>

                <li className="lidetalles">
                  Especialista: Raquel Dura, Nutricionista
                </li>

              </ul>
             
              
              <p className="pconfirmacion">
                Por favor, asegúrate de marcar la fecha y hora en tu calendario. Si necesitas reprogramar o cancelar tu cita, puedes hacerlo llamando a la clinica con al menos 24 horas de anticipación para ayudarnos a gestionar nuestra agenda de manera eficiente y brindar el mejor servicio posible a todos nuestros usuarios.
              </p>

              <p className="pconfirmacion">
                Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos a través de la aplicación o por correo electrónico a [Correo Electrónico].
              </p>

              <p className="pconfirmacion">
                ¡Esperamos con ansias tu visita y estamos aquí para apoyarte en tu camino hacia una mejor salud!
              </p>
              
              <div className="botones">
                <button className="reservar bboton">Reservar</button>
                <button className="cancelar bboton">Cancelar</button>
              </div>

            </div>


            </div>
          </IonContent>
        </IonPage>
      </div>
  
    );
  };
  
  export default ConfirmacionReserva;
  