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
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Email
                </label>
                <input type='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} />
            </div>

            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                    Contraseña
                </label>
                <input type='password' id='password' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password')} />
            </div>


            <button type='submit' className='btn btn-success'>Acceder</button>
        </form>
    )
}

export default Login;