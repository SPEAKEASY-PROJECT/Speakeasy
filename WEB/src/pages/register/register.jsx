import './register.css';
import { useForm } from 'react-hook-form';

function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    function onSubmit(data) {
        console.info(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Email address
                </label>
                <input type='email' id='email' className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} />
            </div>
            <button type='submit' className='btn btn-success'>Registrarse</button>
        </form>
    )
}

export default Register