import './menu.css'
import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';


function Mimenu() {
    const history = useHistory();
    // const handleLogout = () => {
    //     // Aquí deberías realizar cualquier lógica necesaria para cerrar la sesión del usuario, como limpiar la sesión, eliminar tokens, etc.
        
    //     // Después de realizar la lógica de logout, redirecciona a la pantalla de inicio de sesión
    //     history.push('/login');
    // };
    const RutasDeComponente = [
        {
            ruta: '/login',
            nombre: 'Login'
        },
        {
            ruta: '/register',
            nombre: 'Register'
        },
        {
            ruta: '/tab1',
            nombre: 'Tab1'
        },
        {
            ruta: '/tab2',
            nombre: 'Tab2'
        },
        {
            ruta: '/tab3',
            nombre: 'Tab3'
        },
        {
            ruta: '/overviewmonth',
            nombre: 'Overview Month'
        },

        {   
        ruta:'/Login',
        nombre:'Logout'
        }
       
    ]

    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {RutasDeComponente.filter((entry) => {
                        return entry.ruta != "/login" && entry.ruta != "/register"
                    }).map((entry, index) => {
                        return <button key={index} className='butonregistrarse' onClick={(e) => {
                            e.preventDefault();
                            history.push(entry.ruta);
                        }}>{entry.nombre}</button>
                    })}
                     {/* Botón de Logout
                     <button className='butonlogout' onClick={handleLogout}>Logout</button> */}
                </IonContent>
            </IonMenu>

        </>
    );
}
export default Mimenu;