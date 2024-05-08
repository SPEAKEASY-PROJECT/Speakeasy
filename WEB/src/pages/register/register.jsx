import './register.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/api.service';


function Register() {
    const navigate = useNavigate();
    const latitude = useRef(0);
    const longitude = useRef(0);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [error, setError] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude.current = position.coords.latitude;
            longitude.current = position.coords.longitude;
        });
    }, []);
    
    async function onSubmit(data) {
        try {
            setError(false);

             await createUser({
                ...data,
                location: {
                type: 'Point',
                coordinates: [latitude.current, longitude.current],
                },
        });

        navigate('/login');
        } catch (err) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
            <div className='alert-danger'>Error, no se ha podido acceder</div>
            )}
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                    Nombre
                </label>
                <input type='text' id='name' className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name')} />
            </div>
            
            <div className='mb-3'>
                <label htmlFor='birthdate' className='form-label'>
                    Fecha de nacimiento
                </label>
                <input type='date' id='birthdate' className={`form-control ${errors.birthdate ? 'is-invalid' : ''}`} {...register('birthdate')} />
            </div>
           
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                    Nombre de usuario
                </label>
                <input type='text' id='username' className={`form-control ${errors.username ? 'is-invalid' : ''}`} {...register('username')} />
            </div>

            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Email address
                </label>
                <input type='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} />
            </div>

            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                    Contraseña
                </label>
                <input type='password' id='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password')} />
            </div>

            <div className='mb-3'>
                <label htmlFor='location' className='form-label'>
                    Ubicación
                </label>
                <input type='text' id='location' className={`form-control ${errors.location ? 'is-invalid' : ''}`} {...register('location')} />
            </div>

            
            <div className='mb-3'>
                <label htmlFor='avatar' className='form-label'>
                    Sube tu foto/avatar
                </label>
                <input type='imagen' id='avatar' className={`form-control ${errors.avatar ? 'is-invalid' : ''}`} {...register('avatar')} />
            </div>


            <button type='submit' className='btn btn-success'>Registrarse</button>
        </form>
    )
}

export default Register;