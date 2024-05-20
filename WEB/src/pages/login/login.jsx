import './login.css';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.context';

function Login() {
    const navigate = useNavigate();
    const { doLogin } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [error, setError] = useState();

    async function onSubmit(data) {
        try {
            await doLogin(data);
        
            navigate('/home')
            } catch (err) {
            setError(true)
        }
    }

    return (
        
        
        
        
        <div className='login'>
            <div className='Login-text'>
                <p className='title-login'>ENTRA EN SPEAKEASY SHhh<br/>
                 (has de estar registrado)</p>
                <p className='text-login'>Ingresa tus datos aquí para sumergirte en la atmósfera de jazz y elegancia de la época</p>
            </div>
            
            <div className="form-container1">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {error && (
                        <div className='alert alert-danger'>
                            Error, no se ha podido acceder.
                        </div>
                    )}
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label fw-bold'>
                            Email *
                        </label>
                        <input type='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email', { required: true })} />
                        {errors.email && <div className="invalid-feedback">El email es obligatorio</div>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label fw-bold'>
                            Contraseña *
                        </label>
                        <input type='password' id='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password', { required: true })} />
                        {errors.password && <div className="invalid-feedback">La contraseña es obligatoria</div>}
                    </div>
                    <button type='submit' className='btn btn-warning'>Acceder</button>
                </form>
            </div>
        </div>
    );
}

export default Login;