import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Login.css';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState()
  const [password, setPassword] = useState();
 
 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='login'>
          <form action='' className='formulario_login'>
            <h2 className='hiniciarsesion'>Iniciar Sesión</h2>
            <div className='inputs'>
              <input type="text" className='inputmail' placeholder='Correo Electronico' onInput={(e: any) => {
                setCorreo(e.target.value)
              }} />
              <input type="password" className='input' placeholder='Contraseña' onInput={(e: any) => {
                setPassword(e.target.value)
              }}
              />
              <button className='butonlogin' onClick={(e) => {
                e.preventDefault();
                console.log([correo, password])
                axios.post('http://localhost:1489/login', { email: correo, password: password }).then((data) => {
                  history.push('/tab1');
                }).catch((err) => console.error(err))
              }}>Entrar</button>
            </div>
          </form>
          <div className='registro'>
            <h2 className='hregistrarse'>¿Aún no tienes una cuenta?</h2>
            <p className='pregistrarse'>registrate para poder Iniciar Sesión</p>
            <button className='butonregistrarse' onClick={(e) => {
              e.preventDefault();
              history.push('/Register');
            }}>Registrarse</button>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Login;

