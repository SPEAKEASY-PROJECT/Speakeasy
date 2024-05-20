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
        <div className='pantalla-registro'>
            <div className='registro'>
                <p className='title-registro'> Registro</p>
                <div>
                    <p className='registrate'>Regístrate para descubrir un mundo de cocktails exquisitos, 
                    jazz envolvente y eventos exclusivos. Rellena todos los campos y prepárate porque 
                    ¡La puerta a la elegancia de otra época te espera!"</p>
                </div>
            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {error && (
                        <div className='alert alert-danger'>
                            Error, no se ha podido acceder.
                        </div>
                    )}
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label fw-bold'>
                          Nombre *
                        </label>
                        <input type='text' id='name' className={`form-control ${errors.name ? 'is-invalid' : ''}`} {...register('name', { required: true })} />
                    </div>
            
                    <div className='mb-3'>
                        <label htmlFor='birthdate' className='form-label fw-bold'>
                          Fecha de nacimiento *
                        </label>
                        <input type='date' id='birthdate' className={`form-control ${errors.birthdate ? 'is-invalid' : ''}`} {...register('birthdate', { required: true })} />
                    </div>
    
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label fw-bold'>
                          Nombre de usuario *
                        </label>
                        <input type='text' id='username' className={`form-control ${errors.username ? 'is-invalid' : ''}`} {...register('username', { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label fw-bold'>
                          Email *
                        </label>
                        <input type='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label fw-bold'>
                          Contraseña *
                        </label>
                        <input type='password' id='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password', { required: true })} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='location' className='form-label fw-bold'>
                          Ubicación *
                        </label>
                        <input type='text' id='location' className={`form-control ${errors.location ? 'is-invalid' : ''}`} {...register('location', { required: true })} />
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='avatar' className='form-label fw-bold'>
                          Sube tu foto/avatar *
                        </label>
                        <input type='imagen' id='avatar' className={`form-control ${errors.avatar ? 'is-invalid' : ''}`} {...register('avatar', { required: true })} />
                    </div>
                    <button type='submit' className='btn btn-outline-light'>Registrarse</button>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Register;