import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const na = useNavigate()
    const schema = yup
        .object()
        .shape({
            name: yup.string().required().matches(/^\S.*\S$/, 'Only spaces is not Allowed'),
            email: yup.string().required().email(),
            contact: yup.string().required(),
            password: yup.string().required(),

        })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const handleRegister = async (FormData) => {
        // console.log(FormData)
        const res = await fetch(`http://localhost:3000/user`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(FormData)
        })
        const result = await res.json()
        if (result) {
            reset()
            na('/')
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-5 mx-auto">
                    <h1 className='text-center mb-3'>Register <span className='text-danger'>Form</span></h1>
                    <form onSubmit={handleSubmit((data) => handleRegister(data))} >
                        <input type="text" {...register('name')} className='form-control mb-3' placeholder='Enter your name' />
                        {errors.name?.message && <p className='text-danger'>{errors.name?.message}</p>}

                        <input type="text" {...register('email')} className='form-control mb-3' placeholder='Enter your email' />
                        {errors.email?.message && <p className='text-danger'>{errors.email?.message}</p>}

                        <input type="number" {...register('contact')} className='form-control mb-3' placeholder='Enter your contact' />
                        {errors.contact?.message && <p className='text-danger'>{errors.contact?.message}</p>}

                        <input type="password" {...register('password')} className='form-control mb-3' placeholder='Enter your password' />
                        {errors.password?.message && <p className='text-danger'>{errors.password?.message}</p>}

                        <input type="submit" className='form-control text-bg-warning mb-3' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
