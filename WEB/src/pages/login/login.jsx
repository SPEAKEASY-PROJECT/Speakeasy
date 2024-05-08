import './login.css';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { login } from '../../services/api.service';


function Login() {
    
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [error, setError] = useState();

    async function onSubmit(data) {
        try {
            const response = await login(data);
            console.log(response);

            setError(false);
            } catch (err) {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
            <div className='alert-danger'>error. rewiew form data</div>
            )}
            
            <div className='mb-3'>
                <label htmlFor='username' className='form-label'>
                    Nombre de usuario
                </label>
                <input type='text' id='username' className={`form-control ${errors.username ? 'is-invalid' : ''}`} {...register('username')} />
            </div>

            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                    Contraseña
                </label>
                <input type='password' id='contraseña' className={`form-control ${errors.password ? 'is-invalid' : ''}`} {...register('password')} />
            </div>

    

            <button type='submit' className='btn btn-success'>Logearse</button>
        </form>
    )
}

export default Login