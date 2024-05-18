import './profile.css'; 
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.context';
//import { updateUser } from '../../services/api.service';


function Profile() { // Asegúrate de pasar el userId como prop
  const navigate = useNavigate();
  const latitude = useRef(0);
  const longitude = useRef(0);
  const { user } = useContext(AuthContext);

  console.info({ user })


  const {
    register,
    handleSubmit,
    formState: { errors }
} = useForm();
  const [error, setError] = useState();
  //const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

useEffect(() => {
  // Obtener los datos del usuario al cargar el componente
  async function fetchUserData() {
      try {
          //const user = await getProfile();
          //setUserData(user);
      } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
      }
  }
  fetchUserData();
}, []);


useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
      latitude.current = position.coords.latitude;
      longitude.current = position.coords.longitude;
  });
}, []);

async function onSubmit(data) {
  try {
      setError(false);

      /*await updateUser(userId, {
          ...userData, // Mantener los datos del usuario que no se modifican
          ...data, // Sobrescribir los datos que se modificaron en el formulario
          location: {
              type: 'Point',
              coordinates: [latitude.current, longitude.current],
          },
      });*/

      navigate('/login');
  } catch (err) {
      setError(true);
  }
}

return (
  <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
          <div className='alert-danger'>Error, no se ha podido acceder</div>
      )}
      {/* Renderizar los campos de formulario con los datos del usuario */}
      {user && (
          <>
              <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                      Nombre
                  </label>
                  <input type='text' id='name' className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name', { value: user?.name })} />
              </div>
              {/* Renderizar otros campos del formulario con los datos del usuario */}
          </>
      )}
      <button type='submit' className='btn btn-success'>Actualizar perfil</button>
  </form>
);
}

export default Profile;