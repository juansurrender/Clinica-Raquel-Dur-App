import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Register.css';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useState } from 'react';


const Register: React.FC = () => {
  const cumback = useHistory();
  const [correo, setCorreo] = useState()
  const [password, setPassword] = useState();
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form action='' className='formulario_register'>
          <h2 className='hregister'>Registrate!!</h2>
          <input type="text" className='finput nombreinput' placeholder='Nombre' onInput={(e: any) => {
            setNombre(e.target.value)
          }} />
          <input type="text" className='finput apellidoinput' placeholder='Apellido' onInput={(e: any) => {
            setApellido(e.target.value)
          }} />
          <input type="text" className='emailinput ' placeholder='Email' onInput={(e: any) => {
            setCorreo(e.target.value)
          }} />
          <input type="password" className='passinput ' placeholder='Password' onInput={(e: any) => {
            setPassword(e.target.value)
          }} />
          <button className='fbuton' onClick={async (e) => {
            e.preventDefault();
            try {
              await axios.post('http://localhost:1489/register', { email: correo, password: password, nombre: nombre, apellido: apellido })
              cumback.push('/login')
            } catch (error) {
              console.error(error)
            }

          }}>Registrarse

          </button>
          <button className='fbuton' onClick={(e) => {
            e.preventDefault();
            cumback.goBack();
          }}>Volver</button>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
